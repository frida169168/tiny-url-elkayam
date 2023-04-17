import express from 'express';
import userController from "../Controllers/userController.js";
const router = express.Router();

router.get('/',userController.getList);

router.get('/:id',userController.getById);

router.put('/:id',userController.update);

router.post('/',userController.add);

router.delete('/:id',userController.delete);

export default router;