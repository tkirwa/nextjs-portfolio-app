import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'your-mail-server.com',
    port: 587,
    auth: {
      user: 'your-email@domain.com',
      pass: 'your-password',
    },
  });

  await transporter.sendMail({
    from: email,
    to: 'your-email@domain.com',
    subject: `Portfolio Contact: ${name}`,
    text: message,
  });

  return NextResponse.json({ success: true });
}
