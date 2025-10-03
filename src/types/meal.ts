export type MealType = {
  id: string;
  title: string;
  slug: string;
  image: File | string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
};

export type MealFormType = {
  creator: string;
  creator_email: string;
  title: string;
  summary: string;
  instructions: FormDataEntryValue | null;
  image: FormDataEntryValue | null;
  slug?: string;
};
