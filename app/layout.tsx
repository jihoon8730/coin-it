import type { Metadata } from 'next';
import { ThemeProvider } from '@/provider/theme-provider';
import Header from '@/components/Header';
import './styles/globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: '코잇',
  description: '코잇',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
