import { Router } from 'express';
import Utilities from '../controllers/Utilities';

const router: Router = Router();
router.post('/idNames', Utilities.getNames);

export default router;
