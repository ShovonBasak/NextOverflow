"use server";

import User from "@/database/user.model";
import { connectToDB } from "../database";

export async function getUserByClerkId(clerkId: string) {
  try {
    connectToDB();
    const user = await User.findOne({ clerkId });
    return user;
  } catch (error) {
    console.log(error);
  }
}
