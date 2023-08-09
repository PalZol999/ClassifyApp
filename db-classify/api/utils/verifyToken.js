
import  jwt  from "jsonwebtoken";
import { creatError } from "./error.js";

export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token
    if (!token) {
        return next(creatError(401, "You are not authenticated"))
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(creatError(403, "Token is not valid!")); 
        req.user = user;
        next();
      });
}

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
      if (req.user._id === req.params._id || req.user.isAdmin) {
        next();
      } else {
        return next(creatError(403, "You are not authorized!"));
      }
    });
  };

  export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        return next(creatError(403, "You are not authorized!"));
      }
    });
  };
  