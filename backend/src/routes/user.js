import express from 'express'
import { deleteUser, getAllMessage, sendMessage } from '../controllers/messageController.js';
const router = express.Router();




router.get('/:userId', getAllMessage);
router.post('/', sendMessage);

router.delete('/', deleteUser);

export default router;