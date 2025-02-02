import Link from 'next/link';
import { Button } from '@/components/ui/button';
import LoginIcon from '@/public/icons/LoginIcon';
import { useSession, signOut } from 'next-auth/react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import UserIcon from '@/public/icons/UserIcon';

export default function LoginComponent() {
  const { data: session } = useSession();

  if (!session?.user) {
    return <Skeleton className="w-[200px] h-[20px] rounded-full" />;
  }

  return (
    <div>
      {session?.user ? (
        <div className="flex items-center gap-2">
          <Avatar className="w-7 h-7">
            <AvatarImage src={session.user.image || ''} />
            <AvatarFallback>
              <UserIcon className="size-4" />
            </AvatarFallback>
          </Avatar>
          {session.user.name}
          <Button
            variant="outline"
            size="icon"
            className="w-auto px-4"
            onClick={() => signOut()}
          >
            <LoginIcon />
            <p>로그아웃</p>
          </Button>
        </div>
      ) : (
        <Link href={'/login'}>
          <Button variant="outline" size="icon" className="w-auto px-4">
            <LoginIcon />
            <p>로그인</p>
          </Button>
        </Link>
      )}
    </div>
  );
}
