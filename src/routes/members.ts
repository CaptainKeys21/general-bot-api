import { Router } from 'express';
import members from '../controllers/Members';

const router: Router = Router();
router.get('/', members.index);
router.get('/:id', members.findOne);

export default router;
