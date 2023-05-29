import { Router, json } from 'express';
import { Route404 } from './route_404';
import { RouteAbout } from './route_about';
import { AboutInterface } from '../../../core/ports/inbound/about_interface';
import { AboutUsecase } from '../../../core/usecases/about_usecase';


class AppRoute {
  private route: Router;
  aboutImplements: AboutInterface;

  constructor() {
    this.route = Router();
    this.aboutImplements = new AboutUsecase();
  }

  execute(): Router {
    this.route.use( json() );

    this.route.use( new RouteAbout( this.aboutImplements ).execute( ) );

    this.route.use( new Route404().execute() );

    return this.route;
  }
}

export { AppRoute };
