import Image from 'next/image';
import { CDN_ASSETS } from '@/lib/constants/cdnConstant';

export default function Home() {
  return (
    <main
      className={'flex min-h-screen flex-col items-center justify-between p-24'}
    >
      <Image
        src={CDN_ASSETS.character.heroes.riha}
        alt={'riha-test'}
        width={512}
        height={768}
      />
    </main>
  );
}
