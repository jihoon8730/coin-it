'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function CategoryList() {
  const pathName = usePathname().split('/')[2] || 'all';

  const categories = [
    {
      value: 'all',
      name: '전체',
    },
    {
      value: 'daily',
      name: '일상',
    },
    {
      value: 'worry',
      name: '고민',
    },
    {
      value: 'cryptocurrencies',
      name: '가상화폐',
    },
  ];

  const hideWrite = pathName === 'write' ? 'hidden' : '';

  const handleActiveColor = (value: string) => {
    return pathName === value ? 'bg-blue-100 text-blue-800' : '';
  };

  return (
    <div className={cn('flex flex-wrap gap-2', hideWrite)}>
      {categories.map(({ value, name }) => (
        <Link
          key={value}
          href={value === 'all' ? '/community' : `/community/${value}`}
        >
          <Button
            variant="outline"
            size="sm"
            className={cn(
              'rounded-full hover:bg-blue-100 text-gray-700 hover:text-blue-800 transition-colors duration-300',
              handleActiveColor(value),
            )}
          >
            {name}
          </Button>
        </Link>
      ))}
    </div>
  );
}
