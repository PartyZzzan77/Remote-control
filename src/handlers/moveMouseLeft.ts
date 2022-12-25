import { mouse, left } from '@nut-tree/nut-js';

export const moveMouseLeft = async (offset: string): Promise<void> => {
    const off = parseInt(offset);

    if (off) {
        await mouse.move(left(off));
    }
};
