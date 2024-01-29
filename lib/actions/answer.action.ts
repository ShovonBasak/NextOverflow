"use server";

import Answer from "@/database/answer.model";
import { revalidatePath } from "next/cache";
import { connectToDB } from "../database";
import { CreateAnswerParams } from "./shared.types";

export async function createAnswer(params: CreateAnswerParams) {
  try {
    connectToDB();

    const { content, author, question, path } = params;

    await Answer.create({ content, author, question });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
