import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please tell us your name!'],
    },
    email: {
      type: String,
      required: [true, 'Please tell us your email'],
      lowercase: true,
    },
    message: {
      type: String,
      maxlength: 250,
    },
  },
  {
    timestamps: {
      createdAt: true,
    },
  }
);

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
