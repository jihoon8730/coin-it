import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CommunityDataType {
  _id: string | undefined;
  title: string;
}

export default async function Page() {
  const res = await fetch('http://localhost:8080/api/community-list');
  const data: CommunityDataType[] = await res.json();
  return (
    <div className="body-layout">
      <div className="pt-10">
        <h1 className="text-3xl-bold">커뮤니티</h1>
      </div>
      <div className="mt-10 flex justify-between items-center">
        <Input className="w-4/12 rounded-full" />
        <Button className="rounded-full p-5">새 게시글</Button>
      </div>
      {data.map((item) => (
        <div key={item._id}>
          <p>타이틀 : {item.title}</p>
        </div>
      ))}
    </div>
  );
}
