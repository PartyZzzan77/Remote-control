import { mouse, Point, straightTo } from '@nut-tree/nut-js';

import { Constants } from '../utils/constants';
import { pressLeftBTNMouse, releaseLeftBTNMouse } from '../utils/helpers/index.js';

export const drawCircle = async (offset: string[]): Promise<void> => {
	const [radius] = offset;
	const intRadius = parseInt(radius);

	if (radius) {
		const { x, y } = await mouse.getPosition();
		const intX = parseInt(String(x));
		const intY = parseInt(String(y));
		await pressLeftBTNMouse();

		for (let i = 0; i <= Math.PI * 2; i += 0.01) {
			const moveX = intX + intRadius * Math.cos(i);
			const moveY = intY + intRadius * Math.sin(i);
			const target = new Point(moveX, moveY);
			mouse.config.mouseSpeed = Constants.MOUSE_SPEED;
			await mouse.move(straightTo(target));
		}

		await releaseLeftBTNMouse();
	}
};
