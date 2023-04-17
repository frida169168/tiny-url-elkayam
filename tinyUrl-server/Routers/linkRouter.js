import express from 'express';
import linkController from "../Controllers/linkController.js";
const router = express.Router();

router.get('/',linkController.getList);

// router.get('/:id',linkController.getById);

router.get('/:uniqueName',linkController.redirect);

router.put('/:id',linkController.update);

router.post('/',linkController.add);

router.post('/:uniqueName/target',linkController.addTarget);

router.delete('/:id',linkController.delete);

export default router;