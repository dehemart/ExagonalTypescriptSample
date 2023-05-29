import express, { Router, Application } from 'express';
import { AppRoute } from './adapters/inbound/api/routes';


class App {
  private app: Application;
  private routes: Router;

  constructor() {
    this.app = express();
    this.routes = new AppRoute().execute();
  }

  execute(): Application {

    this.app.use( this.routes );

    return this.app;
  }
}

export { App };
