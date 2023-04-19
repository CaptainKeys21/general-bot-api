import { Router } from 'express';
import roles from '../controllers/Roles';

const router: Router = Router();
router.get('/', roles.index);

export default router;
