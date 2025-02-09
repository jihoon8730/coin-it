'use client';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AddIcon from '@/public/icons/AddIcon';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSession } from 'next-auth/react';

type Inputs = {
  search: string;
};

export default function InputHeader() {
  const pathName = usePathname().split('/')[2];
  const hideWrite = pathName === 'write' ? 'hidden' : '';
  const router = useRouter();
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.search === '') {
      return router.push(`/community`);
    }
    router.push(`/community?search=${data.search}`);
    reset();
  };

  const handleIsLogin = () => {
    if (!session) {
      router.push('/login');
    } else {
      router.push('/community/write');
    }
  };
  return (
    <div className={cn('mt-10 flex justify-between items-center', hideWrite)}>
      <form className="w-4/12" onSubmit={handleSubmit(onSubmit)}>
        <Input
          className="rounded-full"
          placeholder="제목 검색..."
          {...register('search')}
        />
      </form>

      <Button className="rounded-full p-5" onClick={handleIsLogin}>
        <AddIcon />
        <p>새 게시글</p>
      </Button>
    </div>
  );
}
