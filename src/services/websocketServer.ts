import { Server, Socket } from 'socket.io';
import htpp, { IncomingMessage, ServerResponse } from 'http';
import Logger from '../models/Logger';
import Members from '../models/Members';

export default class WebSocketServer {
  readonly server: Server;

  constructor(htppServer: htpp.Server<typeof IncomingMessage, typeof ServerResponse>) {
    this.server = new Server(htppServer, {
      cors: { origin: '*' },
      allowEIO3: true,
    });

    this.namespaces();
  }

  private namespaces() {
    this.server.of('/logger').on('connection', this.loggerEmitters);
    this.server.of(/^\/logger\/\d{18}/).on('connection', this.loggerMessageEmitter);
    this.server.of('/members').on('connection', this.memberEmitters);
  }

  private async loggerEmitters(socket: Socket) {
    const streamMap = await Logger.getChangeSets();
    for (const [key, value] of streamMap) {
      value.on('change', (next) => {
        if (next.operationType === 'insert') {
          socket.emit(key, next.fullDocument);
        }
      });
    }
  }

  private async loggerMessageEmitter(socket: Socket) {
    const userId = socket.nsp.name.split('/').pop();

    if (!userId) {
      socket.disconnect();
      return;
    }

    const stream = await Logger.getMemberMessagesChangeSet(userId);
    stream.on('change', (next) => {
      if (next.operationType === 'insert') {
        socket.emit('message', next.fullDocument);
      }
    });
  }

  private async memberEmitters(socket: Socket) {
    const stream = await Members.getChangeSet();

    stream.on('change', (next) => {
      if (next.operationType === 'insert') {
        socket.emit('member:new', next.fullDocument);
      }

      if (next.operationType === 'update') {
        next.fullDocument && socket.emit('member:modify', next.fullDocument);
      }

      if (next.operationType === 'delete') {
        next.fullDocumentBeforeChange &&
          socket.emit('member:remove', next.fullDocumentBeforeChange);
      }
    });
  }
}
