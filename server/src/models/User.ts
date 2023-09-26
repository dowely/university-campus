import { db } from "../app";

export default class User {
  static async getAllUsers() {
    let allUsers = await db.collection("users").find().toArray();
    return allUsers;
  }
}
