import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    next(errorHandler(401, "No token provided"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      next(errorHandler(403, "Invalid token"));
    }
    req.user = user;
    next();
  });
};
