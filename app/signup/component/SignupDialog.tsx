import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import Link from 'next/link';

export default function SignupDialog({
  dialogOpen,
  setDialogOpen,
}: {
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
}) {
  return (
    <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>🎉 회원가입이 완료되었습니다!</AlertDialogTitle>
          <AlertDialogDescription>
            <p>🌿 아름다운 커뮤니티를 위한 이용 안내 🌿</p>

            <p>안녕하세요! 우리 커뮤니티에 오신 것을 환영합니다. 💖</p>
            <p>
              이곳은 서로 존중하고 배려하며 즐겁게 소통하는 공간입니다. 함께 더
              좋은 커뮤니티를 만들어가기 위해 다음 사항을 꼭 지켜주세요.
            </p>
            <br />
            <p>
              <strong>✅ 1. 서로를 존중해주세요</strong>
            </p>
            <p>- 모든 회원은 소중한 존재입니다.</p>
            <p>- 타인을 비방하거나 혐오 표현을 사용하지 마세요.</p>
            <p>- 서로의 의견을 존중하며 건설적인 대화를 나누어요.</p>

            <p>
              <strong>✅ 2. 긍정적이고 따뜻한 소통을 해주세요</strong>
            </p>
            <p>- 친절한 언어를 사용하고, 배려하는 마음을 가져주세요.</p>
            <p>- 도움이 되는 정보나 경험을 공유하며 함께 성장해요.</p>

            <p>
              <strong>
                ✅ 3. 허위 정보 및 불법적인 콘텐츠를 올리지 마세요
              </strong>
            </p>
            <p>- 가짜 뉴스, 허위 사실 유포는 금지됩니다.</p>
            <p>- 불법적이거나 부적절한 콘텐츠를 공유하지 마세요.</p>

            <p>
              <strong>✅ 4. 광고 및 스팸성 게시물을 삼가주세요</strong>
            </p>
            <p>- 상업적인 홍보, 무분별한 링크 공유를 지양합니다.</p>
            <p>- 필요한 경우 관리자에게 사전 문의해 주세요.</p>

            <p>
              <strong>✅ 5. 개인정보 보호를 철저히 해주세요</strong>
            </p>
            <p>- 본인 및 타인의 개인정보(연락처, 주소 등)를 공개하지 마세요.</p>
            <p>- 사적인 정보 공유로 인한 피해가 발생하지 않도록 주의하세요.</p>

            <br />
            <p>
              💡 <strong>모두가 행복한 공간이 되도록 함께 노력해요!</strong>
            </p>
            <p>
              커뮤니티 규칙을 위반하는 경우 경고 또는 이용 제한이 있을 수
              있습니다.
            </p>
            <p>
              더 나은 커뮤니티를 위해 여러분의 협조와 따뜻한 참여를
              부탁드립니다.
            </p>

            <p>감사합니다! 😊💙</p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>
            <Link href={'/login'} passHref>
              로그인 하러 가기
            </Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
