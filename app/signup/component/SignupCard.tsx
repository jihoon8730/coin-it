import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';

export default function SignupCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-white group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border flex flex-col justify-center">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white  w-full text-center"
        >
          회원가입
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
