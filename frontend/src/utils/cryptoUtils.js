// Szyfrowanie danych (np. imię, nazwisko) w Node.js z AES

import crypto from 'crypto';
import { Buffer } from 'buffer';

const ALGORITHM = 'aes-256-cbc';
// Provide your AES secret key here or via a config file/environment variable at build time
const AES_SECRET = import.meta.env.VITE_AES_SECRET || 'default_secret_key';
const SECRET_KEY = crypto.createHash('sha256').update(AES_SECRET).digest();
const IV = Buffer.alloc(16, 0); // Stały wektor – można losować dla większego bezpieczeństwa

export const encrypt = (text) => {
  const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, IV);
  return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
};

export const decrypt = (encryptedText) => {
  const decipher = crypto.createDecipheriv(ALGORITHM, SECRET_KEY, IV);
  return decipher.update(encryptedText, 'hex', 'utf8') + decipher.final('utf8');
};
export const maskName = (name) => {
  if (!name) return '';
  const parts = name.split(' ');
  if (parts.length === 1) return parts[0].charAt(0) + '.';
  return parts.map(part => part.charAt(0) + '.').join(' ');
};