import { Router } from 'express';
import PostsController from '../controllers/posts.controller';

const api = Router()
  .use(PostsController);

export default Router().use('/api', api);