import { Router } from 'express';
import logger from '../controllers/Logger';

const router: Router = Router();
router.get('/', logger.index);
router.get('/:id/messages', logger.messagesByUserId);
router.get('/categories', logger.categories);

export default router;
