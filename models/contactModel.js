import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please insert name"],
    },
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Please insert email"],
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
