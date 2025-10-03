"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

export async function shareMeal(formData: FormData) {
  const meal = {
    creator: String(formData.get("name")),
    creator_email: String(formData.get("email")),
    title: String(formData.get("title")),
    summary: String(formData.get("summary")),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
  };

  console.log(meal);

  await saveMeal(meal);

  redirect("/meals");
}
