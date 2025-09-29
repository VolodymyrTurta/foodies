import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <h1>Meals</h1>
      <Link href="/meals/m1">Meal 1</Link>
      <Link href="/meals/m2">Meal 2</Link>
      <Link href="/meals/m3">Meal 3</Link>
      <Link href="/meals/share">Share</Link>
    </>
  );
}
