import { mouse, left, right, up, down } from '@nut-tree/nut-js';
import { pressLeftBTNMouse, releaseLeftBTNMouse } from '../utils/helpers/index.js';
import { MOUSE_SPEED } from '../utils/constants.js';

export const drawSquare = async (width) => {
  const w = parseInt(width);

  if (w) {
    await pressLeftBTNMouse();
    mouse.config.mouseSpeed = MOUSE_SPEED;
    await mouse.move(up(w));
    mouse.config.mouseSpeed = MOUSE_SPEED;
    await mouse.move(right(w));
    mouse.config.mouseSpeed = MOUSE_SPEED;
    await mouse.move(down(w));
    mouse.config.mouseSpeed = MOUSE_SPEED;
    await mouse.move(left(w));
    await releaseLeftBTNMouse();
  }
};
