'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import SendIcon from '@/public/icons/SendIcon';
import { useState } from 'react';
import axios from 'axios';
import { ApiResponse, PostData } from '@/app/community/type';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { FileUpload } from '@/components/ui/file-upload';
import { API_URL } from '@/lib/api';
import Image from 'next/image';

export default function WriteFrom() {
  const { data: session } = useSession();
  const router = useRouter();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [categories, setCategories] = useState<string>('');
  const [uploadImg, setUploadImg] = useState<string>('');

  const handleFileUpload = async (files: File[]) => {
    try {
      const formData = new FormData();
      formData.append('uploadImg', files[0]);
      const { data: imgUrl } = await axios.post(
        `${API_URL}/api/community-upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      setUploadImg(imgUrl);
    } catch (e) {
      console.error('Error uploading image:', e);
    }
  };

  const onClickSubmit = async () => {
    try {
      if (session?.user) {
        const { email, name, image } = session.user;
        const data: PostData = {
          email,
          name,
          avatar: image,
          uploadImg: uploadImg,
          title,
          content,
          categories,
        };

        const res = await axios.post<ApiResponse>(
          `${API_URL}/api/community-write`,
          data,
        );

        if (res) {
          // 커뮤니티 리스트로 이동
          router.push('/community');
        }

        // console.log(res);
      }
    } catch (e) {
      console.error('Error creating post:', e);
    }
  };

  const onClickCancel = () => {
    setCategories('');
    setContent('');
    setTitle('');
    router.back();
  };

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
        <Select onValueChange={setCategories}>
          <SelectTrigger>
            <SelectValue placeholder="카테고리" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">일상</SelectItem>
            <SelectItem value="worry">고민</SelectItem>
            <SelectItem value="cryptocurrencies">가상화폐</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex flex-col gap-3">
          <p className="text-sm">내용</p>
          <Textarea
            className="h-[250px]"
            placeholder="게시글 내용을 입력하세요"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {uploadImg && (
          <Image
            src={uploadImg}
            alt="upload image"
            width={500}
            height={500}
            style={{
              width: 'auto',
              height: 'auto',
            }}
          />
        )}

        <FileUpload onChange={handleFileUpload} />
      </div>
      <div className="flex gap-2 items-center justify-end mt-5">
        <Button variant="outline" className="py-5" onClick={onClickCancel}>
          취소
        </Button>
        <Button className="py-5" type="submit" onClick={onClickSubmit}>
          <SendIcon />
          <p>게시하기</p>
        </Button>
      </div>
    </div>
  );
}
