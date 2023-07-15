import User from "~/server/models/user.model";
import { generateAccessToken } from "~/server/utils/jwt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const newUser = await User.create({
      name: body.name,
      email: body.email,
      password: body.password,
    });

    const token = generateAccessToken(newUser._id);

    return {
      status: "success",
      token,
      data: {
        user: newUser,
      },
    };
  } catch (e) {}
});
