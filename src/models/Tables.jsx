import mongoose, { Schema, model, models } from "mongoose";
mongoose.connect(process.env.MONGODB_URI);

const collection1Schema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
      enum: ["web", "machine", "artificial", "data"],
    },
    field: {
      type: String,
      required: true,
      enum: ["senior", "junior", "lecturer1", "lecturer2"],
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SemesSchema2 = new Schema(
  {
    code: String,
    title: String,
    description: String,
    name: String,
    position: String,
    specializes: String,
    email: String,
    phone: String,
    image: String,
  },
  { timestamps: true }
);

export const Table1 = models.Table1 || model("Table1", collection1Schema);
export const Semester2 = models.Semester2 || model("Semester2", SemesSchema2);
