import { User } from '../models/user';
import { generateToken } from '../utils/jwtUtils';

interface LoginResponse {
    status: number;
    data: object | string;
}

export const loginUser = async (username: string, password: string): Promise<LoginResponse> => {
    const token = generateToken({id: 'hello', username: 'world', password: '1234'});
    return { status: 200, data: { token } };
}

export const registerUser = async (user: User): Promise<LoginResponse> => {
    return { status: 201, data: 'User registered successfully' };
}