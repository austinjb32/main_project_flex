import DataLoader from "dataloader";
import { AuthByIdBatchFunc } from "../modules/auth/auth.loader";
import { UserByIdBatchFunc } from "../modules/user/user.loader";

export function getLoaders() {
  return {
    userByIdLoader: new DataLoader(UserByIdBatchFunc),
    authByIdLoader: new DataLoader(AuthByIdBatchFunc),
  };
}
