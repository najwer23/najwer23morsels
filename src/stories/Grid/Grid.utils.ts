import { SplitTrack } from './Grid.types';

export const toTemplate = (track?: SplitTrack): string | undefined => {
  if (track === undefined) return undefined;
  return Array.isArray(track) ? track.join(' ') : track;
};
