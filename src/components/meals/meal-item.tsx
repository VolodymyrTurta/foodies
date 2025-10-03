import Image from "next/image";
import Link from "next/link";

import styles from "./meal-item.module.css";

import { type MealType } from "@/types/meal";

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: MealType) {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={String(image)} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>
            <em>by {creator}</em>
          </p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
