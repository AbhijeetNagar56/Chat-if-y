
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();


const SECRET_KEY = process.env.KEY;
const IV = process.env.IVEC;

const algorithm = 'aes-256-cbc';
const key = Buffer.from(SECRET_KEY, 'hex');
const iv = Buffer.from(IV, 'hex');

export function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
  decrypted += decipher.final('utf8');
  return decrypted;
}


