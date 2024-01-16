import { ComponentProps, forwardRef } from 'react';
import { cn } from '@/lib/utils/tailwindUtil';

type ColorType = 'green';
type SizeType = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<ComponentProps<'button'>, 'color'> {
  color?: ColorType;
  size?: SizeType;
}

const COLOR_SCHEME: Record<ColorType, string> = {
  green: 'bg-green text-white-500 hover:bg-green-600',
};

const SIZE_SCHEME: Record<SizeType, string> = {
  sm: 'py-1 px-2 rounded-sm',
  md: 'py-2 px-4 rounded-md',
  lg: 'py-3 px-5 rounded-lg',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = 'green', size = 'md', className, children }, ref) => {
    return (
      <button
        className={cn([COLOR_SCHEME[color], SIZE_SCHEME[size], className])}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
