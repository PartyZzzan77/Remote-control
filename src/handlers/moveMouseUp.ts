import { mouse, up } from '@nut-tree/nut-js';

export const moveMouseUp = async (offset: string[]): Promise<void> => {
    const [value] = offset;
    const off = parseInt(value);

    if (off) {
        await mouse.move(up(off));
    }
};
