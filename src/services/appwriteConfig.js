import { Client, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("http://localhost/v1") // Your API Endpoint
  .setProject("6325b238d41df12f31bc"); // Your project ID
export const account = new Account(client);
