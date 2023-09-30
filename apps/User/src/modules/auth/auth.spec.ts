import { TestDB } from "../../__test__/test-db";
import TestApolloServer from "../../__test__/test-server";
import {
  createAuthOperation,
  createManyAuthOperation,
  deleteAuthOperation,
  deleteManyAuthOperation,
  getAllAuthCountOperation,
  getAllAuthOperation,
  getAuthByIdOperation,
  getOneAuthOperation,
  updateAuthOperation,
  updateManyAuthOperation,
} from "./__test__/operations";
import { rawAuthData, seedAuth } from "./__test__/seed";

describe("Auth Module", () => {
  const server = new TestApolloServer();
  let updateUserIdOne: string = "";
  let updateUserIdTwo: string = "";

  beforeAll(async () => {
    await server.start();
    await seedAuth();
  });

  afterAll(async () => {
    await TestDB.clearData();
    await server.stop();
  });

  it("Positive - QUERY: LIST AUTH BY ID", async () => {
    await getAuthByIdOperation(String(rawAuthData[0]._id.valueOf()), server);
  });

  it("Positive - QUERY: LIST AUTHS", async () => {
    await getAllAuthOperation(String(rawAuthData[1]._id.valueOf()), server);
  });

  it("Positive - QUERY: LIST ONE AUTH", async () => {
    await getOneAuthOperation(String(rawAuthData[2]._id.valueOf()), server);
  });

  it("Positive - QUERY: COUNT AUTHS", async () => {
    await getAllAuthCountOperation(server);
  });

  it("Positive - MUTATION: CREATE AUTH", async () => {
    await createAuthOperation(
      {
        accessToken: "bxFRcX3xUw",
        refreshToken: "px1vVbAJsV",
        userId: "6517adc209a263017ea37063",
        email: "GtLVENJ9d1",
      },
      server
    );
  });

  it("Positive - MUTATION: CREATE MANY AUTHS", async () => {
    const newUsers = await createManyAuthOperation(
      [
        {
          accessToken: "iwQEjtJBSf",
          refreshToken: "NFA3m4YkLX",
          userId: "6517adc209a263017ea37064",
          email: "OGLiDK4dvx",
        },
        {
          accessToken: "ZYeYd2kP79",
          refreshToken: "LchBArmiSl",
          userId: "6517adc209a263017ea37065",
          email: "knUiXYnZ9a",
        },
      ],
      server
    );
    updateUserIdOne = newUsers[0]._id;
    updateUserIdTwo = newUsers[1]._id;
  });

  it("Positive - MUTATION: UPDATE AUTH ", async () => {
    await updateAuthOperation(
      {
        _id: updateUserIdOne,
        accessToken: "1JPVivx5Vg",
        refreshToken: "kTiCMOiprX",
        userId: "6517adc209a263017ea37066",
        email: "UnZU70r3IT",
      },
      server
    );
  });

  it("Positive - MUTATION: UPDATE MANY AUTHS", async () => {
    await updateManyAuthOperation(
      [
        {
          _id: updateUserIdOne,
          accessToken: "6NCH6bd5Kl",
          refreshToken: "AdYhgAwnq9",
          userId: "6517adc209a263017ea37067",
          email: "vMHRyXRfAK",
        },
        {
          _id: updateUserIdTwo,
          accessToken: "UcldUVaIfs",
          refreshToken: "iRjdi2pHzd",
          userId: "6517adc209a263017ea37068",
          email: "dSfGWN93nQ",
        },
      ],
      server
    );
  });

  it("Positive - MUTATION: DELETE AUTH", async () => {
    await deleteAuthOperation(String(rawAuthData[3]._id.valueOf()), server);
  });

  it("Positive - MUTATION: DELETE AUTH BY FILTER", async () => {
    await deleteManyAuthOperation(String(rawAuthData[4]._id.valueOf()), server);
  });
});
