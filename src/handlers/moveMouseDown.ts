import { mouse, down } from '@nut-tree/nut-js';

export const moveMouseDown = async (offset: string): Promise<void> => {
    const off = parseInt(offset);

    if (off) {
        await mouse.move(down(off));
    }
};
