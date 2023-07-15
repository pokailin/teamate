import Contact from "~/server/models/contact.model";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const contact = await Contact.create(body);

    return {
      status: "success",
      data: {
        contact,
      },
    };
  } catch (e) {
    return createError({
      statusCode: 400,
      statusMessage: "Failed to send contact info",
    });
  }
});
