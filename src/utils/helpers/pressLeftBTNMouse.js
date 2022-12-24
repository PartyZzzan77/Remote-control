import { mouse, Button } from '@nut-tree/nut-js';

export const pressLeftBTNMouse = async () => {
  await mouse.pressButton(Button.LEFT);
};
