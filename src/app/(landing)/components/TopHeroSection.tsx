import Image from 'next/image';
import { CDN_ASSETS } from '@/lib/constants/cdnConstant';

const TopHeroSection = () => {
  return (
    <section
      className={
        'relative flex h-screen w-full flex-col gap-8 md:aspect-[1.5] md:h-auto'
      }
    >
      <div className={'absolute left-0 top-0 -z-1 h-full w-full'}>
        <Image
          className={
            'absolute left-0 top-0 h-full w-full object-cover md:object-contain'
          }
          src={CDN_ASSETS.background.gardenDayTime}
          alt={'bg-garden-daytime'}
          width={1536}
          height={1024}
        />
        <span
          className={
            'absolute left-0 top-0 h-full w-full bg-black-transparent-30'
          }
        />
      </div>
      <div className={'mt-[120px] flex flex-col items-center gap-8'}>
        <h1 className={'sr-only'}>나의 작은 정원</h1>
        <Image
          className={'w-1/3 md:w-auto'}
          src={CDN_ASSETS.logo}
          alt={'logo-svg'}
          width={473}
          height={117}
        />
        <p
          className={
            'max-w-[470px] text-center font-bold tracking-[-0.01em] text-white'
          }
        >
          이 프로젝트의 모든 이미지와 이름, 배경은 AI를 사용해서
          만들어졌습니다.&nbsp; 오로지 웹사이트의 배치 및 디자인만 직접
          이루어졌습니다.
        </p>
      </div>
      <Image
        aria-label={'소연,soyeon'}
        className={
          'absolute left-1/2 top-[calc(100%_+_48px)] -translate-x-[calc(50%_+_224px)] -translate-y-full'
        }
        src={CDN_ASSETS.character.transparent.soyeon.banner}
        alt={'soyeon-banner'}
        width={366}
        height={366}
      />
      <Image
        aria-label={'나린,narin'}
        className={
          'absolute left-1/2 top-[calc(100%_+_86px)] -translate-x-[calc(50%_-_224px)] -translate-y-full -scale-x-100'
        }
        src={CDN_ASSETS.character.transparent.narin.banner}
        alt={'narin-banner'}
        width={419}
        height={419}
      />
      <Image
        aria-label={'리하,riha'}
        className={
          'absolute left-1/2 top-[calc(100%_+_86px)] -translate-x-1/2 -translate-y-full'
        }
        src={CDN_ASSETS.character.transparent.riha.banner}
        alt={'riha-banner'}
        width={504}
        height={504}
      />
    </section>
  );
};

export default TopHeroSection;
