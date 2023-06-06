import { Router } from 'express';
import { AboutInterface } from '../../../core/ports/inbound/about_use_case_interface';


class RouteAbout {
  private route: Router;
  private about: AboutInterface;

  constructor( aboutImplements: AboutInterface ) {
    this.route = Router();
    this.about = aboutImplements;
  }

  execute() {
    const msg = this.about.getTextAbout() || 'About page!';

    this.route.use( '/about', ( _, res ) => {
      res.status( 200 ).
        json( { code:200, message: msg } );
    } );

    return this.route;
  }
}

export { RouteAbout };
