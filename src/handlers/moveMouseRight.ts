import { mouse, right } from '@nut-tree/nut-js';

export const moveMouseRight = async (offset: string): Promise<void> => {
    const off = parseInt(offset);

    if (off) {
        await mouse.move(right(off));
    }
};
