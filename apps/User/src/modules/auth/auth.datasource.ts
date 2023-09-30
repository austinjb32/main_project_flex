import bcrypt from "bcrypt";
import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
import {
  CreateAuthInput,
  QueryUserLoginArgs,
  UserContext,
} from "../../libs/types";
import { UserModel } from "../user/user.model";
import { AuthModel } from "./auth.model";

export default class AuthDataSource {
  private readonly model = AuthModel;

  async userLogin(args: QueryUserLoginArgs, context: UserContext) {
    const user = await UserModel.findOne({ email: args.email }).exec();
    if (!user) {
      const error = new Error("No User Found");
      throw error;
    }
    // const validLogin = loginValidation(args);

    // if (validLogin.error) {
    //   throw new Error(`${validLogin.error.name}${validLogin.error.message}`);
    // }

    const hashedPassword = bcrypt.compare(args.password!, user.password);
    if (!hashedPassword) {
      throw new Error("Wrong Password");
    }

    //////////////////{User Token}/////////////////////

    const accessToken = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString(),
      },
      "somesupersecretsecret",
      { expiresIn: "1h" }
    );
    //////////////////{Refresh Token}/////////////////////
    const refreshToken = jwt.sign(
      {
        email: user.email,
        userId: user._id.toString(),
      },
      "somesupersecretsecret",
      { expiresIn: "30d" }
    );

    context.userId = user._id;

    const authData = new this.model({
      accessToken: accessToken,
      refreshToken: refreshToken,
      userId: user._id,
      email: user.email,
    });

    await authData.save();

    return authData;
  }

  async getAuthById(_id: string) {
    return this.model.findById(_id).lean();
  }

  async createAuth(data: CreateAuthInput) {
    const auth = new this.model({ ...data });
    return auth.save();
  }

  async deleteAuth(_id: string) {
    const auth = await this.model.findById(_id);
    if (!auth) throw new GraphQLError("auth not found");

    await this.model.deleteOne({ _id });
    return auth;
  }
}
