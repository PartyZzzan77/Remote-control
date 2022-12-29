import Jimp from 'jimp';
import { Constants } from '../utils/constants';

export const printScreen = async () => {
    try {
        const w = Constants.SCREEN_SHOT_WIDTH;
        const h = Constants.SCREENSHOT_HEIGHT;
        const jArea = new Jimp(w, h);

        return (await jArea.getBase64Async(jArea.getMIME())).split(',')[1];
    } catch (err) {
        return console.error(err);
    }
};
