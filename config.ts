import { config } from 'dotenv';

config();

export const HTTP_PORT = +process.env.HTTP_PORT! || 3000;
export const WSS_PORT = +process.env.WSS_PORT! || 3001;
export const HOST = process.env.DB_HOST as string;