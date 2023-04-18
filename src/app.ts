import express, { Application, urlencoded } from 'express';
import http, { createServer, IncomingMessage, ServerResponse } from 'http';
import * as dotenv from 'dotenv';

import { Server } from 'socket.io';
import WebSocketServer from './services/websocketServer';

import ConfigRoutes from './routes/config/';
import MembersRoutes from './routes/members';
import LoggerRoutes from './routes/logger';

class App {
  readonly app: Application;
  readonly http: http.Server<typeof IncomingMessage, typeof ServerResponse>;
  readonly io: Server;

  constructor() {
    this.app = express();
    this.http = createServer(this.app);
    this.io = new WebSocketServer(this.http).server;

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(urlencoded({ extended: true }));
    this.app.use(express.json());
    // this.app.use((req: IoRequest, _res, next) => {
    //   req.io = this.io;
    //   return next();
    // });
  }

  private routes(): void {
    this.app.use('/config/', ConfigRoutes);
    this.app.use('/members/', MembersRoutes);
    this.app.use('/logger/', LoggerRoutes);
  }
}

dotenv.config({ path: '../config/api.env' });

const httpServer = new App().http;

httpServer.listen(8081, () => {
  console.log('Escutando');
});
