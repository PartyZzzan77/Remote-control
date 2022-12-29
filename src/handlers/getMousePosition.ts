import { mouse } from '@nut-tree/nut-js';

export const getMousePosition = async (): Promise<string> => {
    const { x, y } = await mouse.getPosition();
    return `${x}px,${y}px`;
};
