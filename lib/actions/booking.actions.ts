'use server';

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { sendEmail } from "@/actions/send-email"; 

// --- CONFIGURATION ---
const WORK_START_HOUR = 9; // 9 AM
const WORK_END_HOUR = 17;  // 5 PM
const SLOT_DURATION_MIN = 60;

export async function getAvailableSlots(dateString: string, productId: string) {
  const selectedDate = new Date(dateString);
  const startOfDay = new Date(selectedDate.setHours(0, 0, 0, 0));
  const endOfDay = new Date(selectedDate.setHours(23, 59, 59, 999));

  // 1. Fetch existing bookings
  const existingBookings = await db.booking.findMany({
    where: {
      productId: productId,
      startDateTime: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
  });

  // 2. Generate slots
  const allSlots = [];
  for (let hour = WORK_START_HOUR; hour < WORK_END_HOUR; hour++) {
    const slotDate = new Date(selectedDate);
    slotDate.setHours(hour, 0, 0, 0);
    allSlots.push(slotDate);
  }

  // 3. Filter busy slots
  const availableSlots = allSlots.filter((slot) => {
    const isTaken = existingBookings.some((booking) => {
      return booking.startDateTime.getTime() === slot.getTime();
    });
    return !isTaken && slot.getTime() > Date.now();
  });

  return availableSlots;
}

export async function createBooking(formData: {
  name: string;
  email: string;
  startDateTime: Date;
  productId: string;
}) {
  const { name, email, startDateTime, productId } = formData;

  const endDateTime = new Date(startDateTime);
  endDateTime.setMinutes(endDateTime.getMinutes() + SLOT_DURATION_MIN);

  try {
    // 1. Double-check availability
    const existing = await db.booking.findFirst({
      where: { productId, startDateTime },
    });

    if (existing) {
      return { success: false, error: "Slot was just taken. Please pick another." };
    }

    // 2. Create the Booking
    const newBooking = await db.booking.create({
      data: {
        startDateTime,
        endDateTime,
        customerName: name,
        customerEmail: email,
        productId,
        status: 'CONFIRMED',
      },
      include: { product: true }
    });

    // 3. Send Notification Email (Using FormData adapter)
    // We construct a FormData object to satisfy the existing sendEmail signature
    const emailData = new FormData();
    emailData.append('senderEmail', email); // The client's email
    emailData.append('message', `
      NEW BOOKING CONFIRMED
      ---------------------
      Service: ${newBooking.product.name}
      Client: ${name} (${email})
      Time: ${startDateTime.toLocaleString()}
    `);

    await sendEmail(emailData);

    revalidatePath(`/product/${newBooking.product.slug}`);
    return { success: true, booking: newBooking };

  } catch (error) {
    console.error("Booking Error:", error);
    return { success: false, error: "Database Connection Failed" };
  }
}