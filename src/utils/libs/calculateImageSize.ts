import { TResolution } from "../types/resolution";

export const calculateImageSize = (resolution: TResolution, maxWidth = 203) => {
  const aspectRatios: { [key in typeof resolution]: number[] } = {
    "4:3": [4, 3],
    "16:9": [16, 9],
    "2.35:1": [2.35, 1],
    "9:16": [9, 16],
    "2:3": [2, 3],
    "1:1": [1, 1],
  };

  const [widthRatio, heightRatio] = aspectRatios[resolution];

  const height = (maxWidth * heightRatio) / widthRatio;

  return {
    width: `${maxWidth * 0.267}vw`,
    height: `${height * 0.267}vw`
  }
}