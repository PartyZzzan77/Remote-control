import { down, left, mouse, right, up } from '@nut-tree/nut-js';

import { Constants } from '../utils/constants.js';
import { pressLeftBTNMouse, releaseLeftBTNMouse } from '../utils/helpers/index.js';

export const drawRectangle = async (offset: string[]): Promise<void> => {
    const [w, h] = offset;
    let width = parseInt(w);
    const height = parseInt(h);

    width = width === height ? height * 2 : width;

    if (w && h) {
        mouse.config.mouseSpeed = Constants.MOUSE_SPEED;
        await pressLeftBTNMouse();
        await mouse.move(up(height));
        await mouse.move(right(width));
        await mouse.move(down(height));
        await mouse.move(left(width));
        await releaseLeftBTNMouse();
    }
};
