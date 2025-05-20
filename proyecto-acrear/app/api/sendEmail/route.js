import { EmailTemplate } from '@/components/contact/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (req.method === 'OPTIONS')
    return new Response(null, { status: 200, headers });

  const { to, subject, text } = await req.json();
  const emailContent = EmailTemplate({ message: text, email: to });

  const { data, error } = await resend.emails.send({
    from: 'ACREar <contacto@acrear.org>',
    to: process.env.MAIL_USER,
    subject,
    react: emailContent,
  });

  return new Response(
    JSON.stringify(error ? { error } : data),
    { status: error ? 500 : 200, headers }
  );
}
