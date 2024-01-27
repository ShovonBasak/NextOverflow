"use server";

import Tag from "@/database/tag.model";
import { connectToDB } from "../database";
import { GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDB();
    const tags = await Tag.find({});
    return tags;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
