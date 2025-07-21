import Message from '../models/message.js';
import model from '../models/User.js'

export async function getAllMessage(req, res) {
  try {
    const { user } = req.body;
    const messages = await Message.find({
      $or: [
        { sender: user, receiver: req.params.userId },
        { sender: req.params.userId, receiver: user }
      ]
    }).sort('createdAt');
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error is :", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

export async function sendMessage(req, res) {
  try {
    const { Receiver, Sender, content } = req.body;
    const message = await Message.create({
      sender: Sender,
      receiver: Receiver,
      content
    });
    res.status(201).json(message);
  } catch (error) {
    console.log("Error is :", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}


export async function deleteUser(req, res) {
    try {
        const {name, email, password} = req.body;
        const user = await model.findOne({email});
        if(!user) return res.status(404).json({message:"user not found"});
        const passCorrect = await bcrypt.compare(password, user.password);
        if(!passCorrect) return res.status(400).json({msg:'password not correct'});
        user.deleteOne({ email });
        res.status(200).json({ message: "deleted successfully" });
    } catch (error) {
        console.log("Error in the app ", error);
        res.status(500).json({ message: "Internal Server error" });
    }
}