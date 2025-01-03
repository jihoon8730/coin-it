'use client';

import React from 'react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

export function LoginCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex flex-col justify-center">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white  w-full text-center"
        >
          로그인
        </CardItem>
        <div className="flex-col flex gap-2 mt-10">
          <CardItem translateZ="50" className="text-sm">
            이메일
          </CardItem>
          <CardItem translateZ="50" className="w-full">
            <Input type="email" placeholder="your@gmail.com" />
          </CardItem>
        </div>

        <div className="flex-col flex gap-2 mt-5">
          <CardItem translateZ="50" className="text-sm">
            비밀번호
          </CardItem>
          <CardItem translateZ="50" className="w-full">
            <Input type="password" />
          </CardItem>
        </div>

        <div className="mt-10">
          <CardItem translateZ={60} className="w-full">
            <Button variant="default" className="w-full">
              로그인
            </Button>
          </CardItem>
        </div>
        <div className="flex items-center gap-2 w-full  justify-center mt-5">
          <CardItem translateZ={60} className="text-sm text-gray-600 ">
            계정이 없으신가요?
          </CardItem>
          <CardItem
            translateZ={60}
            as={Link}
            href="/signup"
            className="text-sm text-blue-600 hover:underline"
          >
            회원가입
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
