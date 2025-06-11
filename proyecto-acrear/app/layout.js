// app/layout.js

import './globals.css';
import { LanguageProvider } from '../context/language-context';
import Layout from '../components/layout';


export const metadata = {
  title: 'ACREarg',
  description: 'Cámara Argentina de Economías Regionales',
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='overflow-x-hidden scroll-smooth sm:scroll-auto'>
        <LanguageProvider>
          <Layout>
            {children}
          </Layout>
        </LanguageProvider>
      </body>
    </html>
  );
}
