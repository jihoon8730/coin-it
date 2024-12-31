'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function CategoryList() {
  const searchParams = useSearchParams();
  const searchCategories = searchParams.get('categories');

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
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map(({ value, name }) => (
        <Link
          key={value}
          href={
            value === 'all' ? '/community' : `/community?categories=${value}`
          }
        >
          <Button
            variant="outline"
            size="sm"
            className={cn(
              'rounded-full  hover:bg-blue-100 text-gray-700 hover:text-blue-800 transition-colors duration-300',
              searchCategories === value && 'bg-blue-100 text-blue-800',
            )}
          >
            {name}
          </Button>
        </Link>
      ))}
    </div>
  );
}
