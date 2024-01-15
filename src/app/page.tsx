import TopHeroSection from '@/app/(landing)/components/TopHeroSection';
import TopNav from '@/components/TopNav';

export default function Home() {
  return (
    <article className={'relative flex min-h-screen w-full flex-col'}>
      <TopNav />
      <TopHeroSection />
    </article>
  );
}
