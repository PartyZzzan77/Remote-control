import fs from 'node:fs/promises';
import { screen } from '@nut-tree/nut-js';

export const printScreen = async () => {
    try {
        const screenName = 'print_screen.png';
        //captureRegion causes an error at the library level in the Mac OS system -> please understand the principle is clear
        const screenShotPath = await screen.capture(screenName);
        const base64 = await fs.readFile(screenShotPath, 'base64');

        fs.unlink(screenShotPath);
        return `prnt_scrn ${base64}`;
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
    }
};
