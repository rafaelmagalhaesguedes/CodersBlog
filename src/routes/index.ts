import { Router } from 'express';
import UserRoutes from './UserRoutes';
import LoginRoutes from './LoginRoutes';
import HealthRoute from './HealthRoute';
import CategoriesRoutes from './CategoriesRoutes';

export default class MainRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }
 
  private initializeRoutes() {
    this.router.use('/', HealthRoute);
    this.router.use('/user', UserRoutes);
    this.router.use('/login', LoginRoutes);
    this.router.use('/categories', CategoriesRoutes);
  }
}
