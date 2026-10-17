import { IconsProps } from './Icons.types';

export const IconAside: React.FC<
  IconsProps & {
    open: boolean;
  }
> = ({ width, height, color = 'currentColor', open = false }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M3 7a4 4 0 0 1 4-4h2v18H7a4 4 0 0 1-4-4z" fill={open ? color : 'none'} />
    </svg>
  );
};

IconAside.displayName = 'IconAside';
