import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

type TokenDataType = {
  id: string;
  email: string;
};

// Ideally the user data will be fetched from database
const USER_DATA = {
  id: "8b08d7fe-37fd-11eb-adc1-0242ac120002",
  email: "example@hirespace.com",
  password: "password",
};

// Ideally should get from a service or env var
const APP_SECRET = "00dd6d28-37fe-11eb-adc1-0242ac120002";

export function encodeToken(tokenData: TokenDataType) {
  return jwt.sign(tokenData, APP_SECRET);
}

export const authenticateUser: RequestHandler = (req, res) => {
  const { email, password } = req.body;
  // Ideally hash the password and verify with database
  const isUserAuthenticated =
    email === USER_DATA.email && password === USER_DATA.password;

  if (isUserAuthenticated) {
    res.status(200).json({
      token: encodeToken({ id: USER_DATA.id, email: USER_DATA.email }),
    });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
};
