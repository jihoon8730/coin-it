import { API_URL } from '@/lib/api';
import ListCard from '@/app/community/component/ListCard';
import { CommunityDataType } from '@/app/community/type';
import SearchIcon from '@/public/icons/SearchIcon';
import InputHeader from '@/app/community/component/InputHeader';
import CategoryList from '@/app/community/component/CategoryList';

export default async function Page() {
  const res = await fetch(`${API_URL}/api/community-list?categories=worry`);
  const data = await res.json();
  return (
    <div>
      <InputHeader />
      <div className="mt-5">
        <CategoryList />
      </div>
      <div className="flex flex-col mt-5">
        {data.length === 0 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <SearchIcon className="size-14 stroke-gray-300" />
            <p className="text-large text-gray-300">목록이 없습니다</p>
          </div>
        )}
        {data.map((item: CommunityDataType) => (
          <ListCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
