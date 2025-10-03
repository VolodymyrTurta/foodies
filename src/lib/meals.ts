import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

import { MealType, type MealFormType } from "@/types/meal";

const db = sql("meals.db");

export async function getMeals(): Promise<MealType[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return db.prepare("SELECT * FROM meals").all() as MealType[];
}

export function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal: MealFormType) {
  if (
    !meal.title ||
    !meal.creator ||
    !meal.creator_email ||
    !meal.summary ||
    !meal.instructions ||
    !meal.image ||
    typeof meal.title !== "string" ||
    typeof meal.creator !== "string" ||
    typeof meal.creator_email !== "string" ||
    typeof meal.summary !== "string" ||
    typeof meal.instructions !== "string" ||
    !(meal.image instanceof File)
  ) {
    throw new Error("All fields are required and must be valid");
  }

  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
    `
  ).run(meal);
}
