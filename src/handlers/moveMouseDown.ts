import { down, mouse } from '@nut-tree/nut-js';

export const moveMouseDown = async (offset: string[]): Promise<void> => {
    const [value] = offset;
    const off = parseInt(value);

    if (off) {
        await mouse.move(down(off));
    }
};
