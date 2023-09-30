import mongoose, { Types } from "mongoose";

export const rawUserData = [
  {
    _id: new Types.ObjectId("65164fdebf4ca9f878cb39f3"),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Qcsj1dXmnR",
    email: "vFhF1dM0wJ",
    password: "WXla7oYT6t",
    bio: "HsHmEH86MH",
    status: "YJDNS2CsAr",
    imageUrl: ["wlthJ2uvOq"],
  },
  {
    _id: new Types.ObjectId("65164fdebf4ca9f878cb39f4"),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "tTODTmweJj",
    email: "o3N0kT984j",
    password: "k4q0AvRNIb",
    bio: "9k3VyHw5iY",
    status: "MVVNxhbMPG",
    imageUrl: ["HyOTyMOxgy"],
  },
  {
    _id: new Types.ObjectId("65164fdebf4ca9f878cb39f5"),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "JEkGcbvDl8",
    email: "YqdKljFtWP",
    password: "tWFDUxXx3b",
    bio: "VcDpgqYGRE",
    status: "eEBB5AtfL4",
    imageUrl: ["pgFegp0N4e"],
  },
  {
    _id: new Types.ObjectId("65164fdebf4ca9f878cb39f6"),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "7lzugPtUMJ",
    email: "LuXGoRZvyy",
    password: "f3ppYlNPgj",
    bio: "SRCfEuNBwZ",
    status: "JF5pdgaw9N",
    imageUrl: ["kuRibkHhT4"],
  },
  {
    _id: new Types.ObjectId("65164fdebf4ca9f878cb39f7"),
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "Ww5lAhQT6R",
    email: "uZQ8FDyyzP",
    password: "yqx51fWX2h",
    bio: "WexUKDA6zN",
    status: "wFF0GxXSRH",
    imageUrl: ["jePp9tOCpk"],
  },
];

export const seedUser = async () => {
  const { collections } = mongoose.connection;
  const userCollection = collections["users"];
  console.log(
    "Inserted Doc Ids: ",
    await userCollection.insertMany(rawUserData)
  );
};
