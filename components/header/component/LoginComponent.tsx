import Link from 'next/link';
import { Button } from '@/components/ui/button';
import LoginIcon from '@/public/icons/LoginIcon';
import { useSession, signOut } from 'next-auth/react';

export default function LoginComponent() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div className="flex items-center gap-3">
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
    );
  }
  return (
    <Link href={'/login'}>
      <Button variant="outline" size="icon" className="w-auto px-4">
        <LoginIcon />
        <p>로그인</p>
      </Button>
    </Link>
  );
}
