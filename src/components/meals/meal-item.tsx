import Image from "next/image";
import Link from "next/link";

import styles from "./meal-item.module.css";

export type MealItemType = {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
};

export default function MealItem({
  title,
  slug,
  image,
  summary,
  creator,
}: MealItemType) {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={image} alt={title} width={100} height={100} />
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
