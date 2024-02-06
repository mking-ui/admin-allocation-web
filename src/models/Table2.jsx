import mongoose, { Schema, model, models } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

const TestSchema = new Schema(
  {
    code: {
      type: String,
    },
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    name: {
      type: String,
    },
    position: {
      type: String,
      required: true,
      enum: [ "Senior Lecturer", "Junior Lecturer", "Lecturer 1", "Lecturer 2"],
    },
    field: {
      type: String,
      required: true,
      enum: ["Web Development", "Machine Learning", "Artificial Intelligent", "Data Management"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    image: {
      type: String,
    },
    level: {
      type: String,
      required: true,
      enum: ["L100", "L200", "L300", "L400"],
    },
  },
  { timestamps: true }
);

export const Tablecollection =
  models.Tablecollection || model("Tablecollection", TestSchema);
