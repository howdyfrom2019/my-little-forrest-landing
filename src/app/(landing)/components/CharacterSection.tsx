import Image from 'next/image';
import CharacterSelectButton from '@/app/(landing)/components/CharacterSelectButton';
import TrapeZoid from '@/components/TrapeZoid';
import { CDN_ASSETS } from '@/lib/constants/cdnConstant';
import { cn } from '@/lib/utils/tailwindUtil';

const CharacterSection = () => {
  return (
    <section
      className={'relative flex h-[853px] w-full items-center justify-between'}
    >
      <Image
        className={'absolute left-0 top-0 -z-1 h-full w-full object-cover'}
        src={CDN_ASSETS.background.gardenNightWinter}
        alt={'garden-winter-night'}
        width={1536}
        height={1024}
      />
      <span
        className={'absolute left-0 top-0 -z-1 h-full w-full backdrop-blur-sm'}
      />
      <div className={'z-1 ml-10 flex flex-col'}>
        <header className={'font-tenada typo-2xl'}>캐릭터를 소개합니다!</header>
        <div
          className={
            'mt-5 flex w-fit -skew-x-12 items-center justify-center bg-blue px-10 shadow-sm'
          }
        >
          <h2 className={'skew-x-12 text-[64px] font-bold text-white-500'}>
            리하
          </h2>
        </div>
        <p className={'mt-8 text-sm tracking-[0.01em]'}>
          리하는 당신의 대학교에서 사귀었던 전 여자친구입니다.
          <br />
          서로 테니스 동아리에서 만났던 당신과 리하는 서로에게 긍정적인 영향을
          주는 관계를 유지했었습니다.
          <br />
          헤어진 이후 2년, 우연한 계기로 당신의 정원을 다시 찾은 리하와
          재회했습니다.
          <br />
          리하와 함께하는 정원에선 어떤 일이 일어날까요?
        </p>
        <div className={'flex items-center'}>
          <CharacterSelectButton active />
          <CharacterSelectButton color={'red'} character={'narin'} />
          <CharacterSelectButton color={'mint'} character={'soyeon'} />
        </div>
      </div>
      <div className={cn('md:relative md:h-full md:w-1/2')}>
        <TrapeZoid className={'absolute right-0 top-0 fill-blue-300'} />
        <Image
          className={
            'absolute left-4 top-0 aspect-[0.75] h-full object-contain saturate-[0.2]'
          }
          src={CDN_ASSETS.character.transparent.riha.profile}
          alt={'riha-profile'}
          width={1024}
          height={1536}
        />
      </div>
      <span
        className={
          'absolute left-0 top-0 h-full w-full bg-white-transparent-50'
        }
      />
    </section>
  );
};

export default CharacterSection;
