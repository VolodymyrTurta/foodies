type MealDetailPageProps = {
  params: {
    mealSlug: string;
  };
};

export default async function MealDetailPage({ params }: MealDetailPageProps) {
  const { mealSlug: mealId } = await params;

  return (
    <>
      <h1>{mealId}</h1>
    </>
  );
}
