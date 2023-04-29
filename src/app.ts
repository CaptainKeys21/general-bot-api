import express, { Application, urlencoded } from 'express';
import http, { createServer, IncomingMessage, ServerResponse } from 'http';
import cors from 'cors';
import * as dotenv from 'dotenv';

import { Server } from 'socket.io';
import WebSocketServer from './services/websocketServer';

import ConfigRoutes from './routes/config/';
import MembersRoutes from './routes/members';
import LoggerRoutes from './routes/logger';
import RolesRoutes from './routes/roles';

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
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use('/config/', ConfigRoutes);
    this.app.use('/members/', MembersRoutes);
    this.app.use('/logger/', LoggerRoutes);
    this.app.use('/roles/', RolesRoutes);
  }
}

dotenv.config({ path: '../config/api.env' });

const httpServer = new App().http;

httpServer.listen(8081, () => {
  console.log('Escutando');
});
