import { Router } from 'express';

class Route404 {
  private route: Router;

  constructor() {
    this.route = Router();
  }

  execute() {
    this.route.use( '*', ( _, res ) => {
      res.status( 404 ).json( { code:404, message:'Rota não encontrada!' } );
    } );

    return this.route;
  }
}

export { Route404 };
