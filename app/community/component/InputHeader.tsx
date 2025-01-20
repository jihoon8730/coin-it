'use client';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AddIcon from '@/public/icons/AddIcon';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function InputHeader() {
  const pathName = usePathname().split('/')[2];
  const hideWrite = pathName === 'write' ? 'hidden' : '';
  return (
    <div className={cn('mt-10 flex justify-between items-center', hideWrite)}>
      <Input className="w-4/12 rounded-full" placeholder="게시글 검색..." />
      <Link href="/community/write">
        <Button className="rounded-full p-5">
          <AddIcon />
          <p>새 게시글</p>
        </Button>
      </Link>
    </div>
  );
}
