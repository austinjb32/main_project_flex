import { Resolvers } from "../../libs/types";

export default {
  Query: {
    getAuthById: (parent, args, context, info) =>
      context.dataSources.authDataSource.getAuthById(String(args._id)),
    userLogin: (parent, args, context, info) =>
      context.dataSources.authDataSource.userLogin(args, context),
  },
  Mutation: {
    createAuth: (parent, args, context, info) =>
      context.dataSources.authDataSource.createAuth(args.data),
    deleteAuth: (parent, args, context, info) =>
      context.dataSources.authDataSource.deleteAuth(String(args._id)),
  },
  Auth: {
    __resolveReference: async (ref, context, info) =>
      ref._id ? context.loaders.authByIdLoader.load(ref._id) : null,
  },
} as Resolvers;
