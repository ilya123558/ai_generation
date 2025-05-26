import { IChat } from "@/entities/generations/types/chat";

const GRID_COLUMNS = 2;
const MAX_ROWS = 100;

type Orientation = 'square' | 'vertical' | 'horizontal';

interface GenerationWithOrientation extends IChat {
  orientation: Orientation;
}

export const sortGenerationsForGrid = (items: GenerationWithOrientation[]) => {
  const grid: boolean[][] = Array.from({ length: MAX_ROWS }, () => Array(GRID_COLUMNS).fill(false));
  const result: GenerationWithOrientation[] = [];

  const occupy = (row: number, col: number, orientation: Orientation) => {
    if (orientation === 'square') grid[row][col] = true;
    if (orientation === 'horizontal') {
      grid[row][col] = true;
      grid[row][col + 1] = true;
    }
    if (orientation === 'vertical') {
      grid[row][col] = true;
      grid[row + 1][col] = true;
    }
  };

  const canPlace = (row: number, col: number, orientation: Orientation) => {
    if (orientation === 'square') return !grid[row][col];
    if (orientation === 'horizontal') {
      return col + 1 < GRID_COLUMNS &&
             !grid[row][col] &&
             !grid[row][col + 1];
    }
    if (orientation === 'vertical') {
      return row + 1 < MAX_ROWS &&
             !grid[row][col] &&
             !grid[row + 1][col];
    }
    return false;
  };

  for (const item of items) {
    let placed = false;

    for (let row = 0; row < MAX_ROWS && !placed; row++) {
      for (let col = 0; col < GRID_COLUMNS && !placed; col++) {
        if (canPlace(row, col, item.orientation)) {
          occupy(row, col, item.orientation);
          result.push(item);
          placed = true;
        }
      }
    }

    // Если не удалось вставить — просто добавляем в конец
    if (!placed) result.push(item);
  }

  return result;
};
