// import { and, or, rule, shield } from "graphql-shield";
// import jwt from "jsonwebtoken";
// import { UserModel } from "../../modules/user/user.model";
// import { UserContext } from "../types";

// interface JWTPayload {
//   userId: string;
//   email: string;
// }

// function getPermissions(user: { [x: string]: { permissions: any } }) {
//   if (user && user["http://localhost:4040/User"]) {
//     return user["http://localhost:4040/User"].permissions;
//   }
//   return [];
// }

// const isAuthenticated = rule()(
//   async (_parent: any, { accessToken }, context: UserContext) => {
//     const token = accessToken;

//     if (!token) {
//       throw new Error("No Token found");
//     }

//     const decodedToken = jwt.verify(
//       accessToken,
//       "somesupersecretsecret"
//     ) as JWTPayload;

//     const foundUser = await UserModel.findById(decodedToken.userId);

//     if (!foundUser) {
//       throw new Error("No users found");
//     }

//     context.userId = foundUser._id.toString();

//     return true;
//   }
// );

// const canReadAnyAccount = rule()((parent: any, args: any, { user }: any) => {
//   const userPermissions = getPermissions(user);
//   return userPermissions.includes("read:any_account");
// });

// const canReadOwnAccount = rule()((parent: any, args: any, { user }: any) => {
//   const userPermissions = getPermissions(user);
//   return userPermissions.includes("read:own_account");
// });

// const isReadingOwnAccount = rule()(
//   (parent: any, { id }: any, { user }: any) => {
//     return user && user.sub === id;
//   }
// );

// const permissions = shield({
//   Query: {
//     getUserById: or(
//       and(canReadOwnAccount, isReadingOwnAccount),
//       canReadAnyAccount
//     ),
//     getAllUser: isAuthenticated,
//     getOneUser: or(
//       and(canReadOwnAccount, isReadingOwnAccount),
//       canReadAnyAccount
//     ),
//     getAllUserCount: or(
//       and(canReadOwnAccount, isReadingOwnAccount),
//       canReadAnyAccount
//     ),
//   },
//   Mutation: {
//     createManyUser: or(
//       and(canReadOwnAccount, isReadingOwnAccount),
//       canReadAnyAccount
//     ),
//     updateUser: or(
//       and(canReadOwnAccount, isReadingOwnAccount),
//       canReadAnyAccount
//     ),
//     updateManyUser: or(
//       and(canReadOwnAccount, isReadingOwnAccount),
//       canReadAnyAccount
//     ),
//     deleteUser: or(
//       and(canReadOwnAccount, isReadingOwnAccount),
//       canReadAnyAccount
//     ),
//     deleteManyUser: or(
//       and(canReadOwnAccount, isReadingOwnAccount),
//       canReadAnyAccount
//     ),
//   },
// });

// export default permissions;
