import Image from "next/image";
import Link from "next/link";

import styles from "./meal-item.module.css";

export type MealType = {
  id: string;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string;
};

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
          <Image src={image} alt={title} width={400} height={400} />
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
