import { Router } from 'express';
import deviceRouter from './Devices';
import commentRouter from './Comentarios';
import authRouter from './auth'; // Importa las rutas de autenticación

const router = Router();

router.use('/devices', deviceRouter);
router.use('/comments', commentRouter);
router.use('/auth', authRouter); // Usa las rutas de autenticación

export default router;