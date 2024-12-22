import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className="body-layout">
      <div className="pt-10">
        <h1 className="text-3xl-bold">커뮤니티</h1>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <Input className="w-4/12 rounded-full" />
        <Button className="rounded-full p-5">새 게시글</Button>
      </div>
    </div>
  );
}
