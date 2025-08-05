// Szyfrowanie danych (np. imię, nazwisko) w Node.js z AES
//import CryptoJS from "crypto-js";
import crypto from 'crypto';
import { Buffer } from 'buffer';

const ALGORITHM = 'aes-256-cbc';
// Używamy zmiennej środowiskowej do przechowywania tajnego klucza AES
// Upewnij się, że masz plik .env z ustawioną zmieną VITE_AES_SECRET
// Przykład: VITE_AES_SECRET=mysecretkey
// Możesz też ustawić ten klucz w pliku konfiguracyjnym lub jako zmienną środowiskową
// podczas budowania aplikacji, aby uniknąć trzymania go w kodzie źródłowym.
// Wartość ta powinna być tajna i nie powinna być udostępniana publicznie,
// dlatego najlepiej jest przechowywać ją w pliku .env lub jako zmienną środowiskową.
// Pamiętaj, że klucz AES musi być 32 bajty długi dla algorytmu AES-256.
// Możesz użyć funkcji `crypto.createHash` do wygenerowania klucza
// Provide your AES secret key here or via a config file/environment variable at build time

//const AES_SECRET = import.meta.env.VITE_AES_SECRET || 'default_secret_key';
//const SECRET_KEY = crypto.createHash('sha256').update(AES_SECRET).digest();
//const IV = Buffer.alloc(16, 0); // Stały wektor – można losować dla większego bezpieczeństwa

export const encrypt = (text) => {
  //const cipher = crypto.createCipheriv(ALGORITHM, SECRET_KEY, IV);
  //return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
};

export const decrypt = (encryptedText) => {
  //const decipher = crypto.createDecipheriv(ALGORITHM, SECRET_KEY, IV);
  //return decipher.update(encryptedText, 'hex', 'utf8') + decipher.final('utf8');
};
export const maskName = (name) => {
  if (!name) return '';
  const parts = name.split(' ');
  if (parts.length === 1) return parts[0].charAt(0) + '.';
  return parts.map(part => part.charAt(0) + '.').join(' ');
};