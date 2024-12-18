import jwt from 'jsonwebtoken';
import { User } from '../models/user';

export const generateToken = (user: User) => {
  const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined');
    }

  return jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
};