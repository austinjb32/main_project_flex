import { Document, Model, Schema, Types, model } from "mongoose";

type IAuth = {
  accessToken: string;
  refreshToken: string;
  userId: Types.ObjectId;
  email: string;
} & Record<"createdAt" | "updatedAt", Readonly<Date>>;

export interface IAuthDocument extends IAuth, Document {}

export interface IAuthModel extends Model<IAuthDocument> {}

const AuthSchema = new Schema<IAuthDocument, IAuthModel>(
  {
    accessToken: {
      type: String,
      required: true,
      unique: true,
    },
    refreshToken: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: false,
    },
    email: {
      type: String,
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

export const AuthModel = model<IAuthDocument, IAuthModel>("auths", AuthSchema);
