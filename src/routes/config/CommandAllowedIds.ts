import { Router } from 'express';
import CommandAllowedIdsConfig from '../../controllers/CommandAllowedIdsConfig';

const router: Router = Router();
router.get('/', CommandAllowedIdsConfig.index);
router.post('/', CommandAllowedIdsConfig.store);
router.put('/', CommandAllowedIdsConfig.update);
router.delete('/', CommandAllowedIdsConfig.delete);

export default router;
