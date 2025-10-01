import MealItem from "./meal-item";
import styles from "./meals-grid.module.css";

import { type MealType } from "./meal-item";

type MealsGridProps = {
  meals: MealType[];
};

export default function MealsGrid({ meals }: MealsGridProps) {
  return (
    <ul className={styles.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
