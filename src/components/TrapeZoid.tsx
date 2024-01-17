import { ComponentPropsWithoutRef } from 'react';

const TrapeZoid = ({
  className,
  width,
  height,
  fill,
  viewBox,
  ...props
}: ComponentPropsWithoutRef<'svg'>) => {
  return (
    <svg
      width={width ?? '754'}
      height={height ?? '863'}
      viewBox={viewBox ?? '0 0 754 863'}
      fill={fill ?? 'current'}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g filter="url(#filter0_f_95_6)">
        <path d="M129.5 4H749.69V858.5H4L129.5 4Z" fill="current" />
      </g>
      <defs>
        <filter
          id="filter0_f_95_6"
          x="0"
          y="0"
          width="753.69"
          height="862.5"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_95_6"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default TrapeZoid;
