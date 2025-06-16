import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuración del transporter de nodemailer con timeout
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com', // Tu servidor SMTP de Hostinger
  port: 465, // Puerto SMTP (normalmente 587 para TLS)
  secure: true, // true para 465, false para otros puertos
  auth: {
    user: process.env.EMAIL_USER, // Tu email en Hostinger
    pass: process.env.EMAIL_PASSWORD, // Tu contraseña de email
  },
});

export async function POST(req) {
  try {
    const { name, activity, email, phone, message } = await req.json();

    // Validación básica
    if (!name || !activity || !email || !phone || !message) {
      return NextResponse.json({
        success: false,
        error: 'Faltan campos obligatorios en el formulario.'
      }, { status: 400 });
    }

    // Configuración del email
    const mailOptions = {
      from: `"Formulario Web ACREarg" <${process.env.EMAIL_USER}>`,
      to: 'info@acrearg.com',
      subject: 'Nueva consulta desde la web',
      html: `
        <h2>Nueva consulta recibida</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Actividad:</strong> ${activity}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    };

    console.log('Enviando email con nodemailer...');
    const info = await transporter.sendMail(mailOptions);
    console.log('Resultado de sendMail:', info);

    return NextResponse.json({ success: true, info });
  } catch (error) {
    console.error('Error al enviar email:', error);
    // Respuesta más específica en desarrollo
    const isDev = process.env.NODE_ENV !== 'production';
    return NextResponse.json({
      success: false,
      error: isDev ? error.message : 'Error al enviar el mensaje. Por favor, intente nuevamente más tarde.',
      details: isDev ? error : undefined
    }, { status: 500 });
  }
} 