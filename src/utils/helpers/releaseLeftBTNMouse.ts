import { Button, mouse } from '@nut-tree/nut-js';

export const releaseLeftBTNMouse = async (): Promise<void> => {
	await mouse.releaseButton(Button.LEFT);
};
