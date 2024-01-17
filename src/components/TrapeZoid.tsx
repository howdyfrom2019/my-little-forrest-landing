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
      width={width ?? '746'}
      height={height ?? '855'}
      viewBox={viewBox ?? '0 0 746 855'}
      fill={fill ?? 'current'}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="M125.5 0H745.69V854.5H0L125.5 0Z" fill="current" />
    </svg>
  );
};

export default TrapeZoid;
