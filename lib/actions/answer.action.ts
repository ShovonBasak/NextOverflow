"use server";

import Answer from "@/database/answer.model";
import { revalidatePath } from "next/cache";
import { connectToDB } from "../database";
import { CreateAnswerParams, GetAnswersParams } from "./shared.types";
import Question from "@/database/question.model";

export async function createAnswer(params: CreateAnswerParams) {
  try {
    connectToDB();

    const { content, author, question, path } = params;

    const answer = await Answer.create({ content, author, question });

    await Question.findOneAndUpdate(
      { _id: question },
      {
        $push: { answers: answer._id },
      },
      { upsert: true }
    );

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAnswers(params: GetAnswersParams) {
  try {
    connectToDB();

    const { questionId } = params;

    const answers = await Answer.find({ question: questionId })
      .populate("author", "_id clerkId name image")
      .sort({ createdAt: -1 });

    return { answers };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
