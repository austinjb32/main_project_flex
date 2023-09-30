import { TestDB } from "../../__test__/test-db";
import TestApolloServer from "../../__test__/test-server";
import {
  createUserOperation,
  createManyUserOperation,
  deleteUserOperation,
  deleteManyUserOperation,
  getAllUserCountOperation,
  getAllUserOperation,
  getUserByIdOperation,
  getOneUserOperation,
  updateUserOperation,
  updateManyUserOperation,
} from "./__test__/operations";
import { rawUserData, seedUser } from "./__test__/seed";

describe("User Module", () => {
  const server = new TestApolloServer();
  let updateUserIdOne: string = "";
  let updateUserIdTwo: string = "";

  beforeAll(async () => {
    await server.start();
    await seedUser();
  });

  afterAll(async () => {
    await TestDB.clearData();
    await server.stop();
  });

  it("Positive - QUERY: LIST USER BY ID", async () => {
    await getUserByIdOperation(String(rawUserData[0]._id.valueOf()), server);
  });

  it("Positive - QUERY: LIST USERS", async () => {
    await getAllUserOperation(String(rawUserData[1]._id.valueOf()), server);
  });

  it("Positive - QUERY: LIST ONE USER", async () => {
    await getOneUserOperation(String(rawUserData[2]._id.valueOf()), server);
  });

  it("Positive - QUERY: COUNT USERS", async () => {
    await getAllUserCountOperation(server);
  });

  it("Positive - MUTATION: CREATE USER", async () => {
    await createUserOperation(
      {
        name: "GNNoYsoEAR",
        email: "T19HeXZwfN",
        password: "kvohZsn8tm",
        bio: "fdsOP7u6Ki",
        status: "NxrLWlOTx8",
        imageUrl: ["SgEIx4HP0l"],
      },
      server
    );
  });

  it("Positive - MUTATION: CREATE MANY USERS", async () => {
    const newUsers = await createManyUserOperation(
      [
        {
          name: "eo9NA9Lnga",
          email: "nKbP6G0JQX",
          password: "87oCOWBIpD",
          bio: "J63b9QJ05Y",
          status: "QPyMxvonTd",
          imageUrl: ["oE1kL91RQD"],
        },
        {
          name: "zyRUIqMEyt",
          email: "jCAqkAB2GF",
          password: "A7wU7UYBV0",
          bio: "0f5hSPwMni",
          status: "TnOYgRsgXf",
          imageUrl: ["PgZXv9o1zn"],
        },
      ],
      server
    );
    updateUserIdOne = newUsers[0]._id;
    updateUserIdTwo = newUsers[1]._id;
  });

  it("Positive - MUTATION: UPDATE USER ", async () => {
    await updateUserOperation(
      {
        _id: updateUserIdOne,
        name: "2BUDqiLLdV",
        email: "9cz1nkCEUu",
        password: "KO8kq6zbVk",
        bio: "cdM3uFjeIL",
        status: "2PP2pNa4ji",
        imageUrl: ["gihkUgxp6C"],
      },
      server
    );
  });

  it("Positive - MUTATION: UPDATE MANY USERS", async () => {
    await updateManyUserOperation(
      [
        {
          _id: updateUserIdOne,
          name: "TzRccyCBCK",
          email: "sPpxhczjuB",
          password: "F12bW2odmu",
          bio: "Wd98yQcfCH",
          status: "bRpgtN2qcj",
          imageUrl: ["sJd641prug"],
        },
        {
          _id: updateUserIdTwo,
          name: "hLEXbbpJQZ",
          email: "ykYZ5pTVsk",
          password: "EbKqoCQcOy",
          bio: "vdegysHcVy",
          status: "zj4EGYuUh2",
          imageUrl: ["n7mkYd3kxZ"],
        },
      ],
      server
    );
  });

  it("Positive - MUTATION: DELETE USER", async () => {
    await deleteUserOperation(String(rawUserData[3]._id.valueOf()), server);
  });

  it("Positive - MUTATION: DELETE USER BY FILTER", async () => {
    await deleteManyUserOperation(String(rawUserData[4]._id.valueOf()), server);
  });
});
