import { Router } from 'express';
import logger from '../controllers/Logger';

const router: Router = Router();
router.get('/', logger.index);
router.get('/categories', logger.categories);

export default router;
