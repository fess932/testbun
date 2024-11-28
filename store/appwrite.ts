import { Client, Account, Databases } from "react-native-appwrite";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
  .setProject("670cfc1500163f66eb3e") // Your project ID
  .setPlatform("com.mara.woofly"); // Your application ID or bundle ID.

export const account = new Account(client);
export const database = new Databases(client);

export const databaseID = "670cfe300037d179d1d2";
export const userCollectionID = "670cfe6f0004918d8fef";
export const videoCollectionID = "670e118a001fb0235ab6";
