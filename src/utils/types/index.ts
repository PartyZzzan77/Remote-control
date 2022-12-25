
/* eslint-disable no-unused-vars */
import http from 'http';
import { ServerOptions } from 'ws';

export type TServer = http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>

export interface IWSServer extends ServerOptions {
    server: TServer;
}
