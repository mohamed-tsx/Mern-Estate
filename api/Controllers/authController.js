import User from "../Models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../Utils/error.js";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    res.status(400);
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email: email });
    if (!validUser) {
      return next(errorHandler(401, "User not found"));
    }

    const passwordMatches = await bcrypt.compare(password, validUser.password);

    if (!passwordMatches) {
      return next(errorHandler(401, "Wrong credentials"));
    }

    const token = generateToken(validUser._id, validUser.email);

    const { password: pass, ...rest } = validUser._doc;

    res.cookie("token", token, { httpOnly: true }).status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

const generateToken = (id, email) => {
  const payload = { id, email };
  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret, {
    expiresIn: "1d",
  });
};
