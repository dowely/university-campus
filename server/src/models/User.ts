import bcrypt from "bcryptjs";
import { db } from "../app";
import { attemptedUserData } from "../../../types";
import { WithId, Document } from "mongodb";

export default class User {
  private loginData: any;
  private cleanData: attemptedUserData | null = null;

  constructor(data: any) {
    this.loginData = data;
  }

  cleanUp(): void {
    if (typeof this.loginData.email === "string" && typeof this.loginData.password === "string") {
      this.cleanData = {
        email: this.loginData.email.toLowerCase(),
        password: this.loginData.password,
      };
    }
    if (this.cleanData && typeof this.loginData.name === "string")
      this.cleanData.name = this.loginData.name.trim().toLowerCase();
  }

  async login(): Promise<void> {
    let attemptedUser: WithId<Document> | null = null;

    this.cleanUp();

    if (!this.cleanData) throw new Error("Incorrect credentials format");

    try {
      attemptedUser = await db.collection("users").findOne({ email: this.cleanData.email });

      if (attemptedUser && bcrypt.compareSync(this.cleanData.password, attemptedUser.password)) {
        console.log("we found a match in our db!");
      } else {
        console.log("Wrong email or password");
      }
    } catch (e) {
      console.log("Database query failed...");
    }
  }

  signup(): Promise<void | Error> {
    console.log("data: ", this.loginData);

    this.cleanUp();

    console.log(this.cleanData);
    return new Promise(() => {});
  }

  static async getAllUsers() {
    let allUsers = await db.collection("users").find().toArray();
    return allUsers;
  }
}
