import Link from 'next/link';
import styles from './ArticleCard.module.css';

interface ArticleProps {
  category: string;
  title: string;
  authors: string;
  doi: string;
  id: string;
  date?: string;
}

export default function ArticleCard({ category, title, authors, doi, id, date }: ArticleProps) {
  return (
    <div className={`card ${styles.articleCard}`}>
      <div className={styles.cardHeader}>
        <span className={styles.category}>{category}</span>
        {date && <span className={styles.date}>{date}</span>}
      </div>
      <h3 className={styles.title}>
        <Link href={`/article/${id}`}>{title}</Link>
      </h3>
      <p className={styles.authors}>{authors}</p>
      <div className={styles.footer}>
        <div className={styles.doiGroup}>
          <span className={styles.doiLabel}>DOI:</span>
          <span className={styles.doiValue}>{doi}</span>
        </div>
        <Link href={`/article/${id}`} className={styles.readMore}>
          Read Full Article
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </Link>
      </div>
    </div>
  );
}
