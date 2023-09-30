import mongoose, { Types } from "mongoose";

export const rawAuthData = [
  {
    _id: new Types.ObjectId("6517adc209a263017ea37069"),
    createdAt: new Date(),
    updatedAt: new Date(),
    accessToken: "K6SVAc8RaO",
    refreshToken: "bmMI7mVVRh",
    userId: new Types.ObjectId("6517adc209a263017ea3706a"),
    email: "4zwRQVgXt4",
  },
  {
    _id: new Types.ObjectId("6517adc209a263017ea3706b"),
    createdAt: new Date(),
    updatedAt: new Date(),
    accessToken: "tZsGH966BX",
    refreshToken: "HgmtqJLeJK",
    userId: new Types.ObjectId("6517adc209a263017ea3706c"),
    email: "iaNAEbrPTZ",
  },
  {
    _id: new Types.ObjectId("6517adc209a263017ea3706d"),
    createdAt: new Date(),
    updatedAt: new Date(),
    accessToken: "QFm79yXO4w",
    refreshToken: "ypigKWbXMB",
    userId: new Types.ObjectId("6517adc209a263017ea3706e"),
    email: "gzCQdLbpgC",
  },
  {
    _id: new Types.ObjectId("6517adc209a263017ea3706f"),
    createdAt: new Date(),
    updatedAt: new Date(),
    accessToken: "ZhHaUVLdM3",
    refreshToken: "jdt9NzOdQL",
    userId: new Types.ObjectId("6517adc209a263017ea37070"),
    email: "9jMvrVAghf",
  },
  {
    _id: new Types.ObjectId("6517adc209a263017ea37071"),
    createdAt: new Date(),
    updatedAt: new Date(),
    accessToken: "f6D9e4fXNp",
    refreshToken: "ER2R0IdLUG",
    userId: new Types.ObjectId("6517adc209a263017ea37072"),
    email: "hPSxwPPO6W",
  },
];

export const seedAuth = async () => {
  const { collections } = mongoose.connection;
  const authCollection = collections["auths"];
  console.log(
    "Inserted Doc Ids: ",
    await authCollection.insertMany(rawAuthData)
  );
};
