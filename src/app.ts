import express, { Application, urlencoded } from 'express';

import GeneralConfigRoute from './routes/GeneralConfigRoutes';

class App {
  readonly app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.app.use(urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/GeneralConfig/', GeneralConfigRoute);
  }
}

export default new App().app;
