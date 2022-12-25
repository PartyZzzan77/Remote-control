import Jimp from 'jimp';
import robot from 'robotjs';
import { mouse } from '@nut-tree/nut-js';
import { Constants } from '../utils/constants';
import { scanImage } from '../utils/helpers';

export const printScreen = async () => {
    try {
        const { x, y } = await mouse.getPosition();
        const imageTarget = robot.screen.capture(x, y, Constants.SCREEN_SHOT_WIDTH, Constants.SCREENSHOT_HEIGHT);

        const jArea = new Jimp(Constants.SCREEN_SHOT_WIDTH, Constants.SCREENSHOT_HEIGHT);

        await scanImage(jArea, imageTarget);

        const getBase64 = await jArea.getBase64Async(jArea.getMIME());

        return getBase64.slice(22);
    } catch (err) {
        return console.error(err);
    }
};