import type { Metadata } from 'next';
import { ThemeProvider } from '@/provider/theme-provider';
import Header from '@/components/header/Header';
import './styles/globals.css';
import { Toaster } from '@/components/ui/toaster';
import AuthContext from '@/provider/AuthContext';

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
          <AuthContext>
            <Header />
            {children}
            <Toaster />
          </AuthContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
