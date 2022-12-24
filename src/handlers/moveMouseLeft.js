import { mouse, left } from '@nut-tree/nut-js';

export const moveMouseLeft = async (offset) => {
  const off = parseInt(offset);

  if (off) {
    await mouse.move(left(off));
  }
};
