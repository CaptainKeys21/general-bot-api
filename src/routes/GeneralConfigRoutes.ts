import { Router } from 'express';
import GeneralConfigController from '../controllers/GeneralConfig';

const router: Router = Router();
router.get('/', GeneralConfigController.index);
router.post('/', GeneralConfigController.store);
router.put('/', GeneralConfigController.update);
router.delete('/', GeneralConfigController.delete);

export default router;
