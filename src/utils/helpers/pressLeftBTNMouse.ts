import { Button, mouse } from '@nut-tree/nut-js';

export const pressLeftBTNMouse = async (): Promise<void> => {
	await mouse.pressButton(Button.LEFT);
};
