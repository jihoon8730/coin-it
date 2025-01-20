import CategoryList from '@/app/community/component/CategoryList';
import InputHeader from '@/app/community/component/InputHeader';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="body-layout">
      <div className="pt-10">
        <h1 className="text-3xl-bold">커뮤니티</h1>
      </div>
      <InputHeader />
      <div className="mt-5">
        <CategoryList />
      </div>
      {children}
    </div>
  );
}
