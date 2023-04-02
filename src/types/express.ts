import { Request } from 'express';
import { Server } from 'socket.io';

export interface IoRequest extends Request {
  io?: Server;
}
