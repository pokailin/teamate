import User from "~/server/models/user.model";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  if (!email || !password) {
    return createError({
      statusCode: 400,
      statusMessage: "Please enter your email and password!",
    });
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      return createError({
        statusCode: 401,
        statusMessage: "Incorrect email or password",
      });
    }

    const token = generateAccessToken(user._id);

    return {
      status: "success",
      token,
    };
  } catch (e) {}
});
