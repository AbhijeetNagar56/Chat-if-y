import Message from '../models/message.js';
import { encrypt, decrypt } from '../utils/encrypt.js';


export async function welcome(req, res) {
  try {
    res.status(200).json({ user: req.user });
  } catch (error) {
    console.log("Error is :", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}




export async function getAllMessage(req, res) {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.user, receiver: req.params.userId },
        { sender: req.params.userId, receiver: req.user }
      ]
    }).sort('createdAt');
    const decryptedMessages = messages.map((msg) => ({
      content: decrypt(msg.content),
    }));
    res.status(200).json(decryptedMessages);
  } catch (error) {
    console.log("Error is :", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}




export async function sendMessage(req, res) {
  try {
    const { content } = req.body;
    const encryptedContent = encrypt(content);
    const message = await Message.create({
      sender: req.user,
      receiver: req.params.userId,
      content: encryptedContent
    });
    res.status(201).json(message);
  } catch (error) {
    console.log("Error is :", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}
