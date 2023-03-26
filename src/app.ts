import express, { Application, urlencoded } from 'express';
import * as dotenv from 'dotenv';
import ConfigRoutes from './routes/config/';

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
    this.app.use('/config/', ConfigRoutes);
  }
}

dotenv.config({ path: '../config/api.env' });

const app = new App().app;

app.listen(8081, () => {
  console.log('Escutando');
});
