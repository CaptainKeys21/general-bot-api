import { Router } from 'express';
import logger from '../controllers/Logger';

const router: Router = Router();
router.get('/', logger.index);
router.get('/types', logger.types);

export default router;
