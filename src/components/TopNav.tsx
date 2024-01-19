import Image from 'next/image';
import Button from '@/components/Button';
import { CDN_ASSETS } from '@/lib/constants/cdnConstant';

const TopNav = () => {
  return (
    <div
      aria-label={'top-navigation-wrapper'}
      className={
        'fixed left-0 top-0 z-[999] mx-auto flex w-full items-center bg-[#ffffff10] py-6 backdrop-blur-md'
      }
    >
      <div
        className={
          'min-w-screen-lg mx-10 flex w-full items-center justify-between'
        }
      >
        <Image src={CDN_ASSETS.logo} alt={'logo-svg'} width={178} height={44} />
        <div className={'flex items-center gap-4'}>
          <Button>게임 하러가기</Button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
