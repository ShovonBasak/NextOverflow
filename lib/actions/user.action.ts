"use server";

import User from "@/database/user.model";
import { connectToDB } from "../database";
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from "./shared.types";
import Question from "@/database/question.model";

export async function getUserByClerkId(clerkId: string) {
  try {
    connectToDB();
    const user = await User.findOne({ clerkId });
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDB();
    const user = await User.create(userData);
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(userData: UpdateUserParams) {
  try {
    connectToDB();
    const { clerkId, updateData } = userData;
    await User.findOneAndUpdate({ clerkId }, updateData, { new: true });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser({clerkId}: DeleteUserParams) {
  try {
    connectToDB();
    
    const user = await User.findOne({ clerkId });
    if (!user) throw new Error("User not found");
    
    await Question.deleteMany({author: user._id});

    const deletedUser = await User.findByIdAndDelete(user._id);
    
    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}