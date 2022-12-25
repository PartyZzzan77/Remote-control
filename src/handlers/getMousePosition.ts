import { mouse } from '@nut-tree/nut-js';

export const getMousePosition = async (): Promise<string> => {
    const { x, y } = await mouse.getPosition();
    return `mouse_position\tx:${x},y:${y}`;
};
