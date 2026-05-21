// app/layout.js

import './globals.css';
import { LanguageProvider } from '../context/language-context';
import Layout from '../components/layout';


export const metadata = {
  title: 'ACREarg',
  description: 'Cámara Argentina de Economías Regionales',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className='overflow-x-hidden scroll-smooth sm:scroll-auto' suppressHydrationWarning>
        <LanguageProvider>
          <Layout>
            {children}
          </Layout>
        </LanguageProvider>
      </body>
    </html>
  );
}
