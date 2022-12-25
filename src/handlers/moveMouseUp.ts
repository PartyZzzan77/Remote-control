import { mouse, up } from '@nut-tree/nut-js';

export const moveMouseUp = async (offset: string): Promise<void> => {
    const off = parseInt(offset);

    if (off) {
        await mouse.move(up(off));
    }
};
