import { Document, Model, Schema, model } from "mongoose";

type IUser = {
  name: string;
  email: string;
  password: string;
  bio: string;
  status: string;
  imageUrl: string;
  isAdmin: boolean;
} & Record<"createdAt" | "updatedAt", Readonly<Date>>;

export interface IUserDocument extends IUser, Document {}

export interface IUserModel extends Model<IUserDocument> {}

const UserSchema = new Schema<IUserDocument, IUserModel>(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
    bio: {
      type: String,
      required: false,
      unique: false,
    },
    status: {
      type: String,
      required: false,
      unique: false,
    },
    imageUrl: {
      type: String,
      required: false,
      unique: false,
    },
    isAdmin: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<IUserDocument, IUserModel>("users", UserSchema);
