import { CommunityDataType } from '@/app/community/type';
import ListCard from '@/app/community/component/ListCard';
import { API_URL } from '@/lib/api';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const { search } = await searchParams;

  const res = await fetch(
    search
      ? `${API_URL}/api/community-list?search=${search}`
      : `${API_URL}/api/community-list`,
  );
  const data: CommunityDataType[] = await res.json();

  return (
    <div className="flex flex-col mt-5">
      {data.map((item) => (
        <ListCard key={item._id} item={item} />
      ))}
    </div>
  );
}
