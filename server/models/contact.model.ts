import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please tell us your name!"],
      minlength: 1,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, "Please tell us your email"],
      lowercase: true,
      minlength: 3,
      maxlength: 50,
    },
    message: {
      type: String,
      maxlength: 250,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: false,
    },
  }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
