import Image from 'next/image';
import { CDN_ASSETS } from '@/lib/constants/cdnConstant';

const TopHeroSection = () => {
  return (
    <>
      <section
        className={'relative flex h-screen w-full flex-col gap-8 md:h-[853px]'}
      >
        <div className={'absolute left-0 top-0 -z-1 h-full w-full'}>
          <Image
            className={'absolute left-0 top-0 h-full w-full object-cover'}
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
            'absolute left-1/2 top-[calc(100%_+_48px)] -translate-x-[calc(50%_+_224px)] -translate-y-[110%] md:-translate-y-full'
          }
          src={CDN_ASSETS.character.transparent.soyeon.banner}
          alt={'soyeon-banner'}
          width={366}
          height={366}
        />
        <Image
          aria-label={'나린,narin'}
          className={
            'absolute left-1/2 top-[calc(100%_+_86px)] -translate-x-[calc(50%_-_224px)] -translate-y-[110%] -scale-x-100 md:-translate-y-full'
          }
          src={CDN_ASSETS.character.transparent.narin.banner}
          alt={'narin-banner'}
          width={419}
          height={419}
        />
        <Image
          aria-label={'리하,riha'}
          className={
            'absolute left-1/2 top-[calc(100%_+_86px)] -translate-x-1/2 -translate-y-[110%] md:-translate-y-full'
          }
          src={CDN_ASSETS.character.transparent.riha.banner}
          alt={'riha-banner'}
          width={504}
          height={504}
        />
      </section>
      <section className={'flex flex-col gap-8 pb-20 pt-32 text-center'}>
        <h2 className={'font-tenada uppercase typo-2xl'}>Overview</h2>
        <p className={'text-sm'}>
          {`"나의 작은 정원"`}은 한적한 시골마을 길리에서 자란 주인공이 도시
          생활에 지쳐 작은 식물 정원을 운영하며 시작되는 이야기입니다.
          <br />
          정원에는 어느 날, 세 명의 특별한 소녀들이 찾아와 각자의 매력과
          이야기를 전하며 로맨스가 펼쳐집니다.
          <br />
          나린은 자연 속에서 자라난 낙천적인 동창,
          <br />
          리하는 예술을 전공하고 주인공과의 우연한 재회,
          <br />
          하린은 처음에는 모르던 사람이지만 식물에 대한 호기심으로 친해진
          손님입니다.
          <br />각 캐릭터와의 만남을 통해 주인공은 작은 정원에서의 특별한
          로맨스를 경험하게 됩니다.
        </p>
      </section>
    </>
  );
};

export default TopHeroSection;
