// app/layout.js

import './globals.css';
import { LanguageProvider } from '../context/language-context';
import Layout from '../components/layout';


export const metadata = {
  title: 'ACREar',
  description: 'Cámara Argentina de Economías Regionales',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <Layout>
            {children}
          </Layout>
        </LanguageProvider>
      </body>
    </html>
  );
}
