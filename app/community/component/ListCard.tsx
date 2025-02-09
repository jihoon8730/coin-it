import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CommunityDataType } from '@/app/community/type';
import { dateFormater } from '@/lib/utils';
import Image from 'next/image';
import UserIcon from '@/public/icons/UserIcon';
import Link from 'next/link';

export default function ListCard({ item }: { item: CommunityDataType }) {
  return (
    <div
      key={item._id}
      className="rounded-lg border bg-card text-card-foreground shadow-sm mb-6 hover:shadow-lg transition-shadow duration-300 p-6"
    >
      {/*Link 게시글 상세 페이지 이동*/}
      <Link href={`/community/${item._id}`}>
        <div className="flex items-center gap-[15px]">
          <Avatar>
            {/*아바타*/}
            <AvatarImage src="" />
            <AvatarFallback>
              <UserIcon className="w-[20px] h-[20px]" />
            </AvatarFallback>
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

        <div>
          <Image
            src={item.uploadImg}
            alt={'upload image'}
            width={500}
            height={300}
            style={{
              width: 'auto',
              height: 'auto',
            }}
          />
        </div>
      </Link>
    </div>
  );
}
