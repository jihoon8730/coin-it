'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import SendIcon from '@/public/icons/SendIcon';
import { useState } from 'react';
import axios from 'axios';

interface PostData {
  title: string;
  content: string;
}

interface ApiResponse {
  message: string;
  data?: {
    title: string;
    content: string;
  };
}

export default function WriteFrom() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleSubmit = async () => {
    const data: PostData = { title, content };
    console.log(data);

    try {
      const res = await axios.post<ApiResponse>(
        'http://localhost:8080/api/community-write',
        data,
      );
      console.log(res);
    } catch (e) {
      console.log('e', e);
    }
  };

  console.log(title, content);
  return (
    <div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-3">
          <p className="text-sm">제목</p>
          <Input
            placeholder="게시글 제목을 입력하세요"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sm">내용</p>
          <Textarea
            className="h-[250px]"
            placeholder="게시글 내용을 입력하세요"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-2 items-center justify-end mt-5">
        <Button variant="outline" className="py-5">
          취소
        </Button>
        <Button className="py-5" type="submit" onClick={handleSubmit}>
          <SendIcon />
          <p>게시하기</p>
        </Button>
      </div>
    </div>
  );
}
