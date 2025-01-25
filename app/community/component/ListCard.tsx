import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CommunityDataType } from '@/app/community/type';
import { dateFormater } from '@/lib/utils';

export default function ListCard({ item }: { item: CommunityDataType }) {
  return (
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
            {item.name} {dateFormater(item.createAt)}
          </p>
        </div>
      </div>

      <div className="py-5">
        <p className="text-sm text-gray-600">{item.content}</p>
      </div>
    </div>
  );
}
