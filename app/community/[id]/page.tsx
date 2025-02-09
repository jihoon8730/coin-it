import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ThumbsUp, MessageCircle } from 'lucide-react';
import { API_URL } from '@/lib/api';

export default async function Profile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // next.js 15이상에서 Linking and Navigating 방식 변경
  const id = (await params).id;
  console.log(id);
  const post = {
    id: 1,
    title: '제주도 여행 후기: 아름다운 풍경과 맛있는 음식들',
    content: `제주도 여행을 다녀왔습니다. 3박 4일 동안 정말 좋은 추억을 만들었어요.

첫째 날에는 성산일출봉에서 일출을 보았습니다. 새벽에 일어나는 게 힘들었지만, 그 장관을 보니 정말 가슴이 벅차올랐어요.

둘째 날에는 우도에 다녀왔습니다. 자전거를 빌려 섬을 한 바퀴 돌았는데, 에메랄드빛 바다와 하얀 모래사장이 정말 아름다웠어요.

셋째 날에는 한라산을 등반했습니다. 정상에 오르니 제주도 전체가 한눈에 들어왔어요. 그 광경은 정말 잊을 수 없을 것 같아요.

마지막 날에는 제주 시내에서 맛집 투어를 했습니다. 흑돼지, 갈치조림, 해물탕 등 제주도의 맛있는 음식들을 실컷 먹었어요.

다음에 또 가고 싶은 여행지였습니다. 여러분도 기회가 되면 꼭 한번 다녀오세요!`,
    author: '제주도러버',
    avatarUrl: '/placeholder.svg?height=50&width=50',
    date: '2024-03-15',
    likes: 24,
    comments: 5,
  };

  // const postData = await axios.get(`/api/posts/${id}`);
  // console.log(postData.data);

  const data = await fetch(`${API_URL}/api/community-list/${id}`);
  const postData = await data.json();
  console.log(postData);
  return (
    <div className="min-h-screen  py-8">
      <div className="container mx-auto px-4">
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={post.avatarUrl} alt={post.author} />
                <AvatarFallback>{post.author[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl font-bold">
                  {post.title}
                </CardTitle>
                <p className="text-sm text-gray-500">
                  {post.author} • {post.date}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="mr-2 h-4 w-4" />
                {post.likes}
              </Button>
              <div className="flex items-center">
                <MessageCircle className="mr-2 h-4 w-4" />
                {post.comments}
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
