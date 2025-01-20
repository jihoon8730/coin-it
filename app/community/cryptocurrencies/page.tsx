import { API_URL } from '@/lib/api';
import ListCard from '@/app/community/component/ListCard';
import { CommunityDataType } from '@/app/community/type';

export default async function Page() {
  const res = await fetch(
    `${API_URL}/api/community-list?categories=cryptocurrencies`,
  );
  const data = await res.json();
  return (
    <div className="flex flex-col mt-5">
      {data.map((item: CommunityDataType) => (
        <ListCard key={item._id} item={item} />
      ))}
    </div>
  );
}
