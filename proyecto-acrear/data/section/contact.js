// src/data/section/contact.js

export const contactData       = {
  es: {
    contactInfo: '¿DÓNDE NOS PODÉS ENCONTRAR?',
    title: 'Contáctanos',
    locations: [
      {
        title: 'SEDE CABA',
        address: 'Av. Siempre Viva 123, CABA',
        phone: '+54 11 1234-5678',
      },
      {
        title: 'SEDE SANTA FE',
        address: 'Bv. Gálvez 456, Santa Fe',
        phone: '+54 342 234-5678',
      },
      {
        title: 'SEDE SANTIAGO DEL ESTERO',
        address: 'Salta 789, Santiago del Estero',
        phone: '+54 385 345-6789',
      },
      {
        title: 'SEDE EEUU',
        address: 'xxx',
        phone: 'xxx',
      },
      {
        title: 'SEDE ESPAÑA',
        address: 'xxx',
        phone: 'xxx',
      },
    ],
    formFields: {
      fullName: 'Nombre y apellido*',
      mainActivity: 'Actividad principal*',
      email: 'Correo electrónico*',
      phone: 'Teléfono*',
      message: '¿En qué te podemos ayudar?',
      send: 'Contactame',
    },
    emailSubject: 'Consulta desde la web',
    emailSentSuccess: '¡Email enviado correctamente!',
    emailSentError: 'Hubo un error al enviar.',
  },
  en: {
    contactInfo: 'WHERE TO FIND US?',
    title: 'Contact Us',
    locations: [
      {
        title: 'CABA OFFICE',
        address: 'Av. Siempre Viva 123, CABA',
        phone: '+54 11 1234-5678',
      },
      {
        title: 'SANTA FE OFFICE',
        address: 'Bv. Gálvez 456, Santa Fe',
        phone: '+54 342 234-5678',
      },
      {
        title: 'SANTIAGO DEL ESTERO OFFICE',
        address: 'Salta 789, Santiago del Estero',
        phone: '+54 385 345-6789',
      },
      {
        title: 'USA OFFICE',
        address: 'xxx',
        phone: 'xxx',
      },
      {
        title: 'SPAIN OFFICE',
        address: 'xxx',
        phone: 'xxx',
      },
    ],
    formFields: {
      fullName: 'Full name*',
      mainActivity: 'Main activity*',
      email: 'Email*',
      phone: 'Phone*',
      message: 'How can we help you?',
      send: 'Contact me',
    },
    emailSubject: 'Web Inquiry',
    emailSentSuccess: 'Email sent successfully!',
    emailSentError: 'There was an error sending.',
  },
};
