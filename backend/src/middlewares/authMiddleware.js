import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT;

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(" ")[1];
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    console.log('error is ', err);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};


export default authMiddleware;