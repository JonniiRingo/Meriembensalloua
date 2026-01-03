'use server'

import nodemailer from 'nodemailer';
import { z } from 'zod';

// 1. Define Environment Variable Schema
const envSchema = z.object({
  EMAIL_USER: z.string().email("Invalid EMAIL_USER format"),
  EMAIL_PASS: z.string().min(1, "EMAIL_PASS is missing"),
});

// 2. Validate Environment Variables (Build-time check)
// This prevents the server from starting/running if .env is broken
const env = envSchema.parse({
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
});

// 3. Define Form Data Schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  service: z.string().min(1, "Please select a service"),
  phone: z.string().min(10, "Phone number is too short"),
  message: z.string().optional(),
});

export async function sendEmail(formData: FormData) {
  // 4. Parse and Validate Form Data
  const parseResult = contactFormSchema.safeParse({
    name: formData.get('name'),
    service: formData.get('service'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!parseResult.success) {
    // Return validation errors to the client
    return { success: false, error: parseResult.error.flatten().fieldErrors };
  }

  const { name, service, phone, message } = parseResult.data;

  // 5. Configure Transporter using validated Env Vars
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: env.EMAIL_USER,
      pass: env.EMAIL_PASS,
    },
  });

  try {
    // 6. Send Email
    await transporter.sendMail({
      from: env.EMAIL_USER,
      to: env.EMAIL_USER, 
      subject: `${name} is interested in ${service}`,
      text: `
        New Lead Details:
        -----------------
        Name: ${name}
        Service: ${service}
        Phone: ${phone}
        Message: ${message || 'No message provided'}
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return { success: false, error: 'Failed to send email' };
  }
}