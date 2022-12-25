import Jimp from 'jimp';
import robot from 'robotjs';

export const scanImage = async (region: Jimp, targetImage: robot.Bitmap) => {
    let position = 0;

    region.scan(0, 0, region.bitmap.width, region.bitmap.height, (x, y, idx) => {
        if (x === region.bitmap.width - 1 && y === region.bitmap.height - 1) return;

        region.bitmap.data[idx + 0] = targetImage.image.readUInt8(position++);
        region.bitmap.data[idx + 1] = targetImage.image.readUInt8(position++);
        region.bitmap.data[idx + 2] = targetImage.image.readUInt8(position++);
        region.bitmap.data[idx + 3] = targetImage.image.readUInt8(position++);
    });
};