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
      fill={'none'}
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 3v18" />
      <path d={open ? 'm16 15-3-3 3-3' : 'm14 9 3 3-3 3'} />
    </svg>
  );
};

IconAside.displayName = 'IconAside';
