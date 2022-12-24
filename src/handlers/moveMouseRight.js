import { mouse, right } from '@nut-tree/nut-js';

export const moveMouseRight = async (offset) => {
  const off = parseInt(offset);

  if (off) {
    await mouse.move(right(off));
  }
};
