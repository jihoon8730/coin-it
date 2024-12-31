'use client';
import Image from 'next/image';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import LoginIcon from '@/public/icons/LoginIcon';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Header() {
  const { setTheme } = useTheme();
  const pathName = usePathname();

  return (
    <div
      className={cn(
        'block',
        pathName === '/login' || '/signup' ? 'hidden' : '',
      )}
    >
      <nav className="h-[70px] px-[30px] py-[10px] flex justify-between items-center border-b">
        <div className="flex items-center justify-between gap-[50px]">
          <Link href="/">
            <div className="flex items-center gap-[10px]">
              <div className="overflow-hidden rounded">
                <Image
                  src="/assets/images/coin-it-logo.webp"
                  alt="Coin It Logo"
                  width={35}
                  height={35}
                />
              </div>
              <h1 className="text-large">Coin-it</h1>
            </div>
          </Link>
          <div className="flex gap-[40px]">
            <Link href="/">
              <h2 className="text-large">코인</h2>
            </Link>
            <Link href="/community">
              <h2 className="text-large">커뮤니티</h2>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                라이트
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                다크
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                시스템
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={'/login'}>
            <Button variant="outline" size="icon" className="w-auto px-4">
              <LoginIcon />
              <p>로그인</p>
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
