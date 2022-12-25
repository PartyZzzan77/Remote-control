import { mouse, left, right, up, down } from '@nut-tree/nut-js';
import { Constants } from '../utils/constants.js';
import { pressLeftBTNMouse, releaseLeftBTNMouse } from '../utils/helpers/index.js';


export const drawSquare = async (offset: string): Promise<void> => {
    const w = parseInt(offset);

    if (w) {
        await pressLeftBTNMouse();
        mouse.config.mouseSpeed = Constants.MOUSE_SPEED;
        await mouse.move(up(w));
        mouse.config.mouseSpeed = Constants.MOUSE_SPEED;
        await mouse.move(right(w));
        mouse.config.mouseSpeed = Constants.MOUSE_SPEED;
        await mouse.move(down(w));
        mouse.config.mouseSpeed = Constants.MOUSE_SPEED;
        await mouse.move(left(w));
        await releaseLeftBTNMouse();
    }
};
