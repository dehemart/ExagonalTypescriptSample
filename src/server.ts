import * as dotenv from 'dotenv';
import express from 'express';
import { App } from './app';

export class Server {
  private server: express.Application;
  private server_port = Number( process.env.SERVER_PORT || '8880' );

  constructor() {
    dotenv.config();
    this.server = new App().execute();
  }

  execute() {
    console.log( process.env.DATABASE_URL );

    this.server.listen( this.server_port, () => {
      console.log( `Server running at ${this.server_port} port ......` );
    } );
  }

}

new Server().execute();
