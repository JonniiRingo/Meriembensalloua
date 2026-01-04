'use client';

import { useState, useEffect } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getAvailableSlots, createBooking } from "@/lib/actions/booking.actions";
import { Loader2 } from "lucide-react";
import { toast } from "sonner"; 

export function BookingCalendar({ productId }: { productId: string }) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [slots, setSlots] = useState<Date[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isBooking, setIsBooking] = useState(false);
  
  // Dialog State
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // 1. Fetch Slots when Date Changes
  useEffect(() => {
    if (!date) return;

    const fetchSlots = async () => {
      setIsLoading(true);
      try {
        setSlots([]);
        const available = await getAvailableSlots(date.toISOString(), productId);
        setSlots(available.map((d: any) => new Date(d)));
      } catch (error) {
        console.error("Failed to load slots", error);
        toast.error("Could not load available times.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSlots();
  }, [date, productId]);

  // 2. Handle Booking Submission
  const handleBookSlot = async () => {
    if (!selectedSlot || !name || !email) return;
    
    setIsBooking(true);
    try {
      const result = await createBooking({
        name,
        email,
        startDateTime: selectedSlot,
        productId
      });

      if (result.success) {
        toast.success("Booking Confirmed!", {
          description: "A confirmation email has been sent.",
        });
        setIsDialogOpen(false);
        // Refresh slots to remove the taken one
        const available = await getAvailableSlots(date!.toISOString(), productId);
        setSlots(available.map((d: any) => new Date(d)));
      } else {
        toast.error(result.error || "Booking failed.");
      }
    } catch (e) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* CALENDAR SECTION */}
      <div className="border rounded-md p-4 bg-white shadow-sm flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
          className="rounded-md"
        />
      </div>

      {/* SLOTS SECTION */}
      <div className="space-y-3">
        <h3 className="font-medium text-sm text-muted-foreground">
          Available Times for {date?.toLocaleDateString()}
        </h3>
        
        {isLoading ? (
          <div className="flex justify-center py-4">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : slots.length === 0 ? (
          <p className="text-sm text-center text-slate-400 py-2">No slots available.</p>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {slots.map((slot, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedSlot(slot);
                  setIsDialogOpen(true);
                }}
                className="hover:bg-primary hover:text-white transition-colors"
              >
                {slot.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </Button>
            ))}
          </div>
        )}
      </div>

      {/* CONFIRMATION DIALOG */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Appointment</DialogTitle>
            <DialogDescription>
              {selectedSlot?.toLocaleDateString()} at {selectedSlot?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder="John Doe" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleBookSlot} disabled={isBooking || !name || !email}>
              {isBooking ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Confirm Booking
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}