import { TResolution } from "../types/resolution";

type TReturn = 'vertical' | 'horizontal' | 'square'

export function getOrientation(resolution: TResolution): TReturn {
  let orientation = '';
  
  switch(resolution) {
    case '2:3':
      case '9:16':
        orientation = 'vertical';
        break;
    case '16:9':
    case '4:3':
    case '2.35:1':
      orientation = 'horizontal';
      break;
    case '1:1':
      orientation = 'square';
      break;
    default:
      orientation = 'square';
  }

  return orientation as TReturn
}