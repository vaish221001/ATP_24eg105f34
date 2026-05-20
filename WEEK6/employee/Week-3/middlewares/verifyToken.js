import jwt from "jsonwebtoken";
const { verify } = jwt;

export function verifyToken(req, res, next) {

  // get token from cookies
  const token = req.cookies?.token;

  // if token not present
  if (!token) {
    return res.status(401).json({ message: "plz login" });
  }

  try {
    // verify token
    const decodedToken = verify(token, "abcdef");

    // attach user info to request
    req.user = decodedToken;

    // continue to next middleware
    next();

  } catch (err) {
    res.status(401).json({ message: "session expired. plz relogin" });
  }
}