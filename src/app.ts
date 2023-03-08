import express, { Application, urlencoded } from 'express';

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
    //TODO
  }
}

export default new App().app;
