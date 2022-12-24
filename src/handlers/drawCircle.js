import { mouse, straightTo, Point } from '@nut-tree/nut-js';
import { pressLeftBTNMouse, releaseLeftBTNMouse } from '../utils/helpers/index.js';
import { MOUSE_SPEED } from '../utils/constants.js';

export const drawCircle = async (r) => {
  let { x, y } = await mouse.getPosition();
  let [radius] = r;
  radius = parseInt(radius);
  x = parseInt(x);
  y = parseInt(y);

  if (radius && x && y) {
    await pressLeftBTNMouse();
    for (let i = 0; i <= Math.PI * 2; i += 0.01) {
      if (i === 0.05) {
      }
      const moveX = x + radius * Math.cos(i);
      const moveY = y + radius * Math.sin(i);
      const target = new Point(moveX, moveY);

      mouse.config.mouseSpeed = MOUSE_SPEED;
      await mouse.move(straightTo(target));
    }
    await releaseLeftBTNMouse();
  }
};
