import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoText}>
            <span className={styles.journalAbbr}>PJPS</span>
            <span className={styles.journalFull}>Pakistan Journal of Pharmaceutical Sciences</span>
          </div>
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/" className={styles.navLink}>Home</Link></li>
            <li><Link href="/board" className={styles.navLink}>Editorial Board</Link></li>
            <li><Link href="/issues" className={styles.navLink}>Issues</Link></li>
            <li><Link href="/archive" className={styles.navLink}>Archive</Link></li>
            <li><Link href="/submission" className={styles.navLink}>Submission</Link></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <button className={styles.searchBtn} aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
          </button>
          <Link href="/submission" className="btn btn-primary">Submit Manuscript</Link>
        </div>
      </div>
    </header>
  );
}
