import { sign, verify } from "../utils/token.util.js";

//generate token
export const generateToken = async (payload, expiresIn, secret) => {
  let token = await sign(payload, expiresIn, secret);
  return token;
};

//verify token
export const verifyToken = async (token, secret) => {
  let check = await verify(token, secret);
  return check;
};
