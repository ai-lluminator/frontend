// utils/auth.ts
import jwt, { Secret } from 'jsonwebtoken';

const SECRET_KEY: Secret = process.env.JWT_SECRET_KEY || ''; // Replace with your actual secret key

export function validateToken(token: string) {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded;
    } catch {
        return null;
    }
}

export function generateToken(payload: object, expiresIn: string = '1h') {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
  }