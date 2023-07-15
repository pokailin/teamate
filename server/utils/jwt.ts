import jwt from "jsonwebtoken";

export const generateAccessToken = (userId: any) => {
  const config = useRuntimeConfig();

  return jwt.sign({ userId }, config.jwtAccessSecret, { expiresIn: "10m" });
};
