import type { NextApiRequest, NextApiResponse } from 'next';
import emailjs from 'emailjs-com';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, message }: EmailData = req.body;

    try {
      await emailjs.send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        { name, email, message },
        process.env.EMAILJS_PUBLIC_KEY
      );

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Failed to send email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
