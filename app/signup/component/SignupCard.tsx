'use client';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import axios from 'axios';

export default function SignupCard() {
  const { toast } = useToast();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [isCheckPolicy, setIsCheckPolicy] = useState<boolean>(false);

  const onClickSignup = async () => {
    await axios.post('http://localhost:8080/api/signup-user', {
      name,
      email,
      password,
    });
  };

  const handleValidation = async () => {
    const nameRegex = /^[a-zA-Z가-힣\s]{2,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[A-Za-z\d@$!%*?&]{8,}$/;

    const validationMsg = {
      name: '유효하지 않은 이름입니다. 2~20자의 한글, 영어 또는 공백만 허용됩니다.',
      email: '유효하지 않은 이메일입니다.',
      password: '비밀번호는 8자 이상이어야 합니다.',
      passwordConfirm: '비밀번호가 일치하지 않습니다.',
      policy: '이용약관에 동의해주세요.',
    };

    const validationToast = (title: string, description: string) => {
      toast({
        variant: 'destructive',
        title: title,
        description: description,
        action: <ToastAction altText="다시 입력">다시 입력</ToastAction>,
        duration: 3000,
      });
    };

    if (!nameRegex.test(name)) {
      validationToast('이름 확인', validationMsg.name);
    } else if (!emailRegex.test(email)) {
      validationToast('이메일 확인', validationMsg.email);
    } else if (!passwordRegex.test(password)) {
      validationToast('비밀번호 확인', validationMsg.email);
    } else if (password !== passwordConfirm) {
      validationToast('비밀번호 재확인', validationMsg.passwordConfirm);
    } else if (!isCheckPolicy) {
      validationToast('이용약관 확인', validationMsg.policy);
    } else {
      console.log('회원가입 성공');
      await onClickSignup();
    }
  };

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
            <Input
              type="text"
              placeholder="ex) 홍길동"
              onChange={(e) => setName(e.target.value)}
            />
          </CardItem>
        </div>
        <div className="flex-col flex gap-2 mt-5">
          <CardItem translateZ="50" className="text-sm">
            이메일
          </CardItem>
          <CardItem translateZ="50" className="w-full">
            <Input
              type="email"
              placeholder="ex) your@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </CardItem>
        </div>
        <div className="flex-col flex gap-2 mt-5">
          <CardItem translateZ="50" className="text-sm">
            비밀번호
          </CardItem>
          <CardItem translateZ="50" className="w-full">
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardItem>
        </div>
        <div className="flex-col flex gap-2 mt-5">
          <CardItem translateZ="50" className="text-sm">
            비밀번호 확인
          </CardItem>
          <CardItem translateZ="50" className="w-full">
            <Input
              type="password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </CardItem>
        </div>
        <CardItem translateZ="50" className="flex items-center gap-1 mt-5">
          <Checkbox
            id="policy"
            checked={isCheckPolicy}
            onCheckedChange={() => setIsCheckPolicy(!isCheckPolicy)}
          />
          <label
            htmlFor="policy"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            <span>이용약관에 동의합니다</span>
          </label>
        </CardItem>
        <CardItem translateZ="50" className="w-full mt-5">
          <Button
            className="w-full"
            variant="default"
            onClick={handleValidation}
          >
            회원가입
          </Button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
