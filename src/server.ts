import 'dotenv/config';
import express from 'express';
import { App } from './app';

export class Server {
  private server: express.Application;
  private server_port = Number( process.env.SERVER_PORT || '8880' );

  constructor() {
    this.server = new App().execute();
  }

  execute() {
    this.server.listen( this.server_port, () => {
      console.log( `Server running at ${this.server_port} port ......` );
    } );
  }

}

new Server().execute();
