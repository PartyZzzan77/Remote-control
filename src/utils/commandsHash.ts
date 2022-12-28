import { drawCircle, drawRectangle, drawSquare, getMousePosition, moveMouseDown, moveMouseLeft, moveMouseRight, moveMouseUp, printScreen } from '../handlers/index.js';

export const commandHash = {
    mouse_position: getMousePosition,
    draw_circle: drawCircle,
    draw_square: drawSquare,
    draw_rectangle: drawRectangle,
    mouse_up: moveMouseUp,
    mouse_down: moveMouseDown,
    mouse_left: moveMouseLeft,
    mouse_right: moveMouseRight,
    prnt_scrn: printScreen,
};