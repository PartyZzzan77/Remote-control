import { mouse, left, right, up, down } from '@nut-tree/nut-js';
import { pressLeftBTNMouse, releaseLeftBTNMouse } from '../utils/helpers/index.js';
import { Constants } from '../utils/constants.js';

export const drawRectangle = async (offset: string[]): Promise<void> => {
    const [w, h] = offset;
    let width = parseInt(w);
    const height = parseInt(h);
    width = width === height ? height * 2 : width;

    if (w && h) {
        await pressLeftBTNMouse();
        mouse.config.mouseSpeed = Constants.MOUSE_SPEED;
        await mouse.move(up(height));
        mouse.config.mouseSpeed = Constants.MOUSE_SPEED;
        await mouse.move(right(width));
        mouse.config.mouseSpeed = Constants.MOUSE_SPEED;
        await mouse.move(down(height));
        mouse.config.mouseSpeed = Constants.MOUSE_SPEED;
        await mouse.move(left(width));
        await releaseLeftBTNMouse();
    }
};
