'use client';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import CheckIcon from '@/public/icons/CheckIcon';
import process from 'node:process';

type Inputs = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  policy: boolean;
};

export default function SignupCard() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [duplicateCheck, setDuplicateCheck] = useState<boolean>(false);

  const nameRegex = /^[a-zA-Z가-힣\s]{2,20}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^[A-Za-z\d@$!%*?&]{8,}$/;

  const onSubmitSignup: SubmitHandler<Inputs> = async (data) => {
    console.log('data', data);
    await axios.post('http://localhost:8080/api/signup-user', {
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  const handleValidation = async () => {
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

    if (errors.name) {
      validationToast('이름 확인', validationMsg.name);
      return false;
    } else if (errors.email) {
      validationToast('이메일 확인', validationMsg.email);
      return false;
    } else if (errors.password) {
      validationToast('비밀번호 확인', validationMsg.password);
      return false;
    } else if (errors.passwordConfirm) {
      validationToast('비밀번호 확인', validationMsg.passwordConfirm);
      return false;
    } else if (errors.policy) {
      validationToast('이용약관 확인', validationMsg.policy);
      return false;
    }
    return true;
  };

  const onClickDuplicateCheck = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const emailValue = watch('email');
    if (!emailValue) return;

    const emailData = {
      email: emailValue,
    };

    try {
      const apiServer = process.env.NEXT_PUBLIC_API_SERVER;
      const result = await axios.post(
        `${apiServer}/api/signup-duplication`,
        emailData,
      );
      console.log('onClickDuplicateCheck', result.data);
      if (result.data.message === 'success') {
        console.log('중복된 이메일이 없습니다.');
        setDuplicateCheck(true);
        toast({
          variant: 'default',
          title: '중복 확인 완료',
          description: '사용 가능한 이메일입니다.',
          duration: 3000,
        });
      } else {
        console.log('중복된 이메일이 있습니다.');
        setDuplicateCheck(false);
        toast({
          variant: 'destructive',
          title: '중복 이메일',
          description: '이미 사용중인 이메일입니다.',
          duration: 3000,
        });
      }
    } catch (error) {
      console.log('onClickDuplicateCheck Error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitSignup)}>
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
                {...register('name', { required: true, pattern: nameRegex })}
              />
            </CardItem>
          </div>
          <div className="flex-col flex gap-2 mt-5">
            <CardItem
              translateZ="50"
              className="text-sm flex gap-2 items-center"
            >
              <p>이메일</p>
              {duplicateCheck && (
                <CheckIcon className="w-4 h-4 text-emerald-500" />
              )}
            </CardItem>
            <CardItem translateZ="50" className="w-full flex gap-3">
              <Input
                type="email"
                placeholder="ex) your@gmail.com"
                {...register('email', {
                  required: true,
                  pattern: emailRegex,
                })}
                disabled={duplicateCheck}
              />
              <Button
                onClick={onClickDuplicateCheck}
                disabled={duplicateCheck || !watch('email')}
              >
                중복확인
              </Button>
            </CardItem>
          </div>
          <div className="flex-col flex gap-2 mt-5">
            <CardItem translateZ="50" className="text-sm">
              비밀번호
            </CardItem>
            <CardItem translateZ="50" className="w-full">
              <Input
                type="password"
                {...register('password', {
                  required: true,
                  pattern: passwordRegex,
                })}
                disabled={!duplicateCheck}
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
                {...register('passwordConfirm', {
                  required: true,
                  validate: (value) => value === watch('password'),
                })}
                disabled={!duplicateCheck}
              />
            </CardItem>
          </div>
          <CardItem translateZ="50" className="flex items-center gap-1 mt-5">
            <Input
              type="checkbox"
              id="policy"
              {...register('policy', { required: true })}
              className="w-4 h-4"
              disabled={!duplicateCheck}
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
              type="submit"
              className="w-full"
              variant="default"
              onClick={handleValidation}
            >
              회원가입
            </Button>
          </CardItem>
        </CardBody>
      </CardContainer>
    </form>
  );
}
