import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AddIcon from '@/public/icons/AddIcon';
import Link from 'next/link';
import { CommunityDataType } from '@/app/community/type';
import ListCard from '@/app/community/list/component/ListCard';

export default async function Page() {
  const res = await fetch('http://localhost:8080/api/community-list');
  const data: CommunityDataType[] = await res.json();

  return (
    <div className="body-layout">
      <div className="pt-10">
        <h1 className="text-3xl-bold">커뮤니티</h1>
      </div>
      <div className="mt-10 flex justify-between items-center mb-10">
        <Input className="w-4/12 rounded-full" placeholder="게시글 검색..." />
        <Link href="/community/write">
          <Button className="rounded-full p-5">
            <AddIcon />
            <p>새 게시글</p>
          </Button>
        </Link>
      </div>
      <div className="flex flex-col ">
        {data.map((item) => (
          <ListCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
