import Jimp from 'jimp';
import robot from 'robotjs';
import { Constants } from '../constants';

export const scanImage = async (targetImg: robot.Bitmap): Promise<Jimp> => {
    return new Promise((res, rej) => {
        try {
            const w = Constants.SCREEN_SHOT_WIDTH;
            const h = Constants.SCREENSHOT_HEIGHT;
            const jArea = new Jimp(w, h);
            let pos = 0;

            jArea.scan(0, 0, jArea.bitmap.width, jArea.bitmap.height, (x, y, inx) => {
                jArea.bitmap.data[inx + 2] = targetImg.image.readUInt8(pos++);
                jArea.bitmap.data[inx + 1] = targetImg.image.readUInt8(pos++);
                jArea.bitmap.data[inx + 0] = targetImg.image.readUInt8(pos++);
                jArea.bitmap.data[inx + 3] = targetImg.image.readUInt8(pos++);

                if (x === jArea.bitmap.width - 1 && y === jArea.bitmap.height - 1) res(jArea);
            });
        } catch (e) {
            rej(e);
        }
    });
};