import dotenv from 'dotenv';
import jwt, { JwtPayload, Secret, SignOptions } from 'jsonwebtoken';

dotenv.config();

const secretKey: Secret = process.env.JWT_SECRET || 'mySecretKey';

const jwtConfig: SignOptions = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const generateJWT = (payload: JwtPayload) => {
  const token = jwt.sign({ data: payload }, secretKey, jwtConfig);

  return token;
};

export default generateJWT;
