import { left, mouse } from '@nut-tree/nut-js';

export const moveMouseLeft = async (offset: string[]): Promise<void> => {
	const [value] = offset;
	const off = parseInt(value);

	if (off) {
		await mouse.move(left(off));
	}
};
