import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import AddIcon from '@/public/icons/AddIcon';
import Link from 'next/link';

interface CommunityDataType {
  _id: string | undefined;
  title: string;
}

export default async function Page() {
  const res = await fetch('http://localhost:8080/api/community-list');
  const data: CommunityDataType[] = await res.json();

  return (
    <main className="body-layout">
      <div className="pt-10">
        <h1 className="text-3xl-bold">커뮤니티</h1>
      </div>
      <div className="mt-10 flex justify-between items-center mb-10">
        <Input className="w-4/12 rounded-full" />
        <Link href="/community/write">
          <Button className="rounded-full p-5">
            <AddIcon />
            <p>새 게시글</p>
          </Button>
        </Link>
      </div>
      <div className="flex flex-col ">
        {data.map((item) => (
          <div
            key={item._id}
            className="rounded-lg border bg-card text-card-foreground shadow-sm mb-6 hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <div className="flex items-center gap-[15px]">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>P</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-sm text-muted-foreground">
                  여행자 2024-03-15
                </p>
              </div>
            </div>

            <div className="py-5">
              <p className="text-sm text-gray-600">
                제주도의 아름다운 풍경과 맛있는 음식들, 그리고 현지 주민들과의
                따뜻한 만남까지...
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
