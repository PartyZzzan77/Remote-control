import { mouse, right } from '@nut-tree/nut-js';

export const moveMouseRight = async (offset: string[]): Promise<void> => {
    const [value] = offset;
    const off = parseInt(value);

    if (off) {
        await mouse.move(right(off));
    }
};
