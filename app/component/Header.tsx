'use client';
import Image from 'next/image';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export default function Header() {
  const { setTheme, theme } = useTheme();

  return (
    <header>
      <nav className="h-[70px] px-[20px] py-[10px] flex justify-between items-center border-b">
        <div className="flex items-center justify-between  gap-[50px]">
          <div className="flex items-center gap-[10px]">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/assets/images/coin-it-logo.webp"
                alt="Coin It Logo"
                width={40}
                height={40}
              />
            </div>
            <h1 className="text-large">코잇</h1>
          </div>
          <div>
            <h2 className="text-large">코인</h2>
          </div>
        </div>

        <div>
          {theme === 'dark' ? (
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme('light')}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            </Button>
          ) : (
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme('dark')}
            >
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
