import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <head />
      <body className='bg-gray-500'>{children}</body>
    </html>
  );
}
