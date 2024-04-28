import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/store/StoreProvider';
import NavBar from './components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ezraababait test',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="flex flex-col w-full h-screen">
          <NavBar />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
