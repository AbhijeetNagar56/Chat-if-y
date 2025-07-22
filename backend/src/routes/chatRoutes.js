import express from 'express'
import { welcome, getAllMessage, sendMessage } from '../controllers/messageController.js';
const router = express.Router();



router.get('/', welcome);
router.get('/:userId', getAllMessage);
router.post('/:userId', sendMessage);


export default router;