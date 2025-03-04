import { CommunityDataType } from '@/app/community/type';
import ListCard from '@/app/community/component/ListCard';
import { API_URL } from '@/lib/api';
import SearchIcon from '@/public/icons/SearchIcon';
import InputHeader from '@/app/community/component/InputHeader';
import CategoryList from '@/app/community/component/CategoryList';

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
    <>
      <InputHeader />
      <div className="mt-5">
        <CategoryList />
      </div>
      {data.length === 0 && (
        <div className="flex items-center justify-center gap-2 mt-10">
          <SearchIcon className="size-14 stroke-gray-300" />
          <p className="text-large text-gray-300">목록이 없습니다</p>
        </div>
      )}
      <div className="flex flex-col mt-5">
        {data.map((item) => (
          <ListCard key={item._id} item={item} />
        ))}
      </div>
    </>
  );
}
