import Image from 'next/image';
import Button from '@/components/Button';
import { CDN_ASSETS } from '@/lib/constants/cdnConstant';

const TopNav = () => {
  return (
    <div
      aria-label={'top-navigation-wrapper'}
      className={
        'fixed left-0 top-0 z-[999] mx-auto flex w-full items-center bg-[#ffffff10] py-3 backdrop-blur-md md:py-6'
      }
    >
      <div
        className={
          'md:min-w-screen-lg mx-6 flex w-full items-center justify-between md:mx-10'
        }
      >
        <Image
          className={'w-24 md:w-[178px]'}
          src={CDN_ASSETS.logo}
          alt={'logo-svg'}
          width={178}
          height={44}
        />
        <div className={'flex items-center gap-4'}>
          <Button>게임 하러가기</Button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
