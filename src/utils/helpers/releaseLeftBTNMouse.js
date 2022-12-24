import { mouse, Button } from '@nut-tree/nut-js';

export const releaseLeftBTNMouse = async () => {
  await mouse.releaseButton(Button.LEFT);
};
