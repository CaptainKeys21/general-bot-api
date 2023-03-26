import { Router } from 'express';
import general from './GeneralConfig';
import cmdAllowedIds from './CommandAllowedIds';

const router: Router = Router();
router.use('/general', general);
router.use('/cmdAllowedIds', cmdAllowedIds);

export default router;
