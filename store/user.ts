import {
  account,
  database,
  databaseID,
  userCollectionID,
} from "@/store/appwrite";
import { ID } from "react-native-appwrite";
import { getErrorMessage } from "@/store/errors";
import { localdb } from "@/store/localdb";

type User = {
  id: string;
  accountID: string;
  email: string;
  username: string;
};

export async function createUser(
  email: string,
  password: string,
  username: string,
) {
  const user: User = {
    id: ID.unique(),
    accountID: ID.unique(),
    email: email,
    username: username,
  };

  try {
    const newAccount = await account.create(
      user.accountID,
      user.email,
      password,
      user.username,
    );
    console.log(`new account: ${newAccount}`);
    // save user id?

    // const us: User = { username: username, email: email };
    const newUser = await database.createDocument(
      databaseID,
      userCollectionID,
      ID.unique(),
      user,
    );
    console.log(`new account: ${newUser}`);

    return user;
    // get user if created?
  } catch (e) {
    throw new Error(`failed to create new user: ${getErrorMessage(e)}`);
  }
}

async function getCurrentUser() {
  //
  const sessionKey = localdb.getString("session_key");
  if (!sessionKey) {
    return undefined;
  }
}
