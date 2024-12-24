import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import SendIcon from '@/public/icons/SendIcon';

export default function Page() {
  // server 액션 및 뮤테이션
  async function sendPost() {
    'use server';
    console.log('send click!');
  }

  return (
    <main className="body-layout">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-3xl mx-auto px-5 py-10 mt-10">
        <h1 className="text-2xl font-bold text-center">새 게시글 작성</h1>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <p className="text-sm">제목</p>
            <Input placeholder="게시글 제목을 입력하세요" />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm">내용</p>
            <Textarea
              className="h-[250px]"
              placeholder="게시글 내용을 입력하세요"
            />
          </div>
        </div>
        <div className="flex gap-2 items-center justify-end mt-5">
          <Button variant="outline" className="py-5">
            취소
          </Button>
          <Button className="py-5" onClick={sendPost}>
            <SendIcon />
            <p>게시하기</p>
          </Button>
        </div>
      </div>
    </main>
  );
}
