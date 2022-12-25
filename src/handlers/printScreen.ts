import { mouse } from '@nut-tree/nut-js';
import Jimp from 'jimp';
import robot from 'robotjs';
import { Constants } from '../utils/constants';
import { scanImage } from '../utils/helpers/index.js';

export const printScreen = async () => {
    try {
        const w = Constants.SCREEN_SHOT_WIDTH;
        const h = Constants.SCREENSHOT_HEIGHT;
        const { x, y } = await mouse.getPosition();
        const bitmap = robot.screen.capture(x, y, w, h);
        const buffer = await scanImage(bitmap);
        const getBase64 = await buffer.getBase64Async(buffer.getMIME());

        return getBase64.split(',')[1];
    } catch (err) {
        return console.error(err);
    }
};
