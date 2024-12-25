import WriteFrom from '@/app/community/write/component/WriteFrom';

export default function Page() {
  return (
    <main className="body-layout">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-3xl mx-auto px-5 py-10 mt-10">
        <h1 className="text-2xl font-bold text-center">새 게시글 작성</h1>
        <WriteFrom />
      </div>
    </main>
  );
}
