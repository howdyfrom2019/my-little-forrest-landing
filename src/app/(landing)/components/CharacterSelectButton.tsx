import Image from 'next/image';
import { CDN_ASSETS } from '@/lib/constants/cdnConstant';
import { cn } from '@/lib/utils/tailwindUtil';

type colorType = 'red' | 'blue' | 'mint';
type CharacterType = 'riha' | 'narin' | 'soyeon';

interface Props {
  active?: boolean;
  className?: string;
  color?: colorType;
  character?: CharacterType;
}

const CHARACTER_ASSET: Record<CharacterType, string> = {
  riha: CDN_ASSETS.character.transparent.riha.profile,
  narin: CDN_ASSETS.character.transparent.narin.profile,
  soyeon: CDN_ASSETS.character.transparent.soyeon.profile,
};

const CharacterSelectButton = ({
  active,
  className,
  color = 'blue',
  character = 'riha',
}: Props) => {
  return (
    <button
      className={cn([
        'relative aspect-[131/231] w-20 -skew-x-12 md:w-32',
        color === 'blue' && 'bg-blue-300',
        color === 'red' && 'bg-red-300',
        color === 'mint' && 'bg-mint-300',
        !active && 'bg-gray-500',
        className,
      ])}
    >
      <Image
        className={cn([
          'absolute left-0 top-0 h-full w-full skew-x-12 object-cover',
          !active && 'mix-blend-luminosity',
        ])}
        src={CHARACTER_ASSET[character]}
        alt={character}
        width={131}
        height={231}
      />
    </button>
  );
};

export default CharacterSelectButton;
