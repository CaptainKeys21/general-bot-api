import { Router } from 'express';
import Utilities from '../controllers/Utilities';

const router: Router = Router();
router.post('/idNames', Utilities.getNames);
router.post('/idEmojis', Utilities.getEmojis);

export default router;
