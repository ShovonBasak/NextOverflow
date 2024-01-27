"use server";

import Question from "@/database/question.model";
import { connectToDB } from "../database";
import { revalidatePath } from "next/cache";
import { Types } from "mongoose";
import Tag from "@/database/tag.model";
import { CreateQuestionParams, GetQuestionByIdParams, GetQuestionsParams } from "./shared.types";
import User from "@/database/user.model";

export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectToDB();
    const questions = await Question.find({})
      .populate({ path: "author", model: User })
      .populate({ path: "tags", model: Tag })
      .sort({ createdAt: -1 });
    return { questions };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getQuestionById(params: GetQuestionByIdParams) {
  try {
    connectToDB();
    const question = await Question.findOne({ _id: params.questionId })
      .populate({ path: "author", model: User })
      .populate({ path: "tags", model: Tag });
    return question;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createQuestion(params: CreateQuestionParams) {
  try {
    connectToDB();
    const { title, explanation, tags, author, path } = params;
    const question = await Question.create({
      title,
      explanation,
      author,
    });

    const tagDocuments: Types.ObjectId[] = [];

    for (const tag of tags) {
      const tagFromDb = await Tag.findOneAndUpdate(
        { name: new RegExp(`^${tag}$`, "i") },
        {
          $setOnInsert: { name: tag },
          $push: { questions: question._id },
        },
        { upsert: true, new: true }
      );
      tagDocuments.push(tagFromDb._id);
    }

    await Question.findByIdAndUpdate(question._id, { $push: { tags: { $each: tagDocuments } } });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
}
