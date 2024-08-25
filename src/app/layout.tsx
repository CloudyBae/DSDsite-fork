import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import styles from './page.module.css';
import Footer from '@/app/components/footer/footer';
import Navbar from './components/navbar/navbar';

export const metadata: Metadata = {
  title: 'Dallas Software Developers',
  description: 'A community dedicated to empowering local developers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
