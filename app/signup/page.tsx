import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import React from 'react';

export default function Page() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex flex-col justify-center">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white  w-full text-center"
        >
          회원가입
        </CardItem>
        <div className="flex-col flex gap-2 mt-10">
          <CardItem translateZ="50" className="text-sm">
            이름
          </CardItem>
          <CardItem translateZ="50" className="w-full">
            <input
              type="text"
              placeholder="ex) 홍길동"
              className="w-full dark:bg-black border rounded-lg p-2"
            />
          </CardItem>
        </div>
        <div className="flex-col flex gap-2 mt-5">
          <CardItem translateZ="50" className="text-sm">
            이메일
          </CardItem>
          <CardItem translateZ="50" className="w-full">
            <input
              type="email"
              placeholder="ex) your@gmail.com"
              className="w-full dark:bg-black border rounded-lg p-2"
            />
          </CardItem>
        </div>
        <div className="flex-col flex gap-2 mt-5">
          <CardItem translateZ="50" className="text-sm">
            비밀번호
          </CardItem>
          <CardItem translateZ="50" className="w-full">
            <input
              type="password"
              className="w-full dark:bg-black border rounded-lg p-2"
            />
          </CardItem>
        </div>
        <div className="flex-col flex gap-2 mt-5">
          <CardItem translateZ="50" className="text-sm">
            비밀번호 확인
          </CardItem>
          <CardItem translateZ="50" className="w-full">
            <input
              type="password"
              className="w-full dark:bg-black border rounded-lg p-2"
            />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
