import express, { Application, urlencoded } from 'express';
import htpp, { createServer, IncomingMessage, ServerResponse } from 'http';
import * as dotenv from 'dotenv';
import ConfigRoutes from './routes/config/';
import MembersRoutes from './routes/members';
import { Server } from 'socket.io';
import { IoRequest } from './types/express';
import WebSocketServer from './services/websocketServer';

class App {
  readonly app: Application;
  readonly http: htpp.Server<typeof IncomingMessage, typeof ServerResponse>;
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
  }
}

dotenv.config({ path: '../config/api.env' });

const htppServer = new App().http;

htppServer.listen(8081, () => {
  console.log('Escutando');
});
