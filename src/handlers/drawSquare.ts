import { mouse, left, right, up, down } from '@nut-tree/nut-js';
import { Constants } from '../utils/constants.js';
import { pressLeftBTNMouse, releaseLeftBTNMouse } from '../utils/helpers/index.js';

export const drawSquare = async (offset: string): Promise<void> => {
    const w = parseInt(offset);

    if (w) {
        mouse.config.mouseSpeed = Constants.MOUSE_SPEED;
        await pressLeftBTNMouse();
        await mouse.move(up(w));
        await mouse.move(right(w));
        await mouse.move(down(w));
        await mouse.move(left(w));
        await releaseLeftBTNMouse();
    }
};
