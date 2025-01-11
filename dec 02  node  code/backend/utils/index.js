import jwt from "jsonwebtoken";
export const createJWT = (res, userId) => {
  const token = jwt.sign({ userId }, "AdityaJain2024", {
    expiresIn: "1d",
  });
  return token
};