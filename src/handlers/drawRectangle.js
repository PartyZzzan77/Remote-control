import { mouse, left, right, up, down } from '@nut-tree/nut-js';
import { pressLeftBTNMouse, releaseLeftBTNMouse } from '../utils/helpers/index.js';
import { MOUSE_SPEED } from '../utils/constants.js';

export const drawRectangle = async (coords) => {
  let [w, h] = coords;
  w = parseInt(w);
  h = parseInt(h);

  if (w && h) {
    await pressLeftBTNMouse();
    mouse.config.mouseSpeed = MOUSE_SPEED;
    await mouse.move(up(h));
    mouse.config.mouseSpeed = MOUSE_SPEED;
    await mouse.move(right(w));
    mouse.config.mouseSpeed = MOUSE_SPEED;
    await mouse.move(down(h));
    mouse.config.mouseSpeed = MOUSE_SPEED;
    await mouse.move(left(w));
    await releaseLeftBTNMouse();
  }
};
