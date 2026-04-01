import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContent}`}>
        <div className={styles.logoGroup}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="m2 17 10 5 10-5"></path><path d="m2 12 10 5 10-5"></path></svg>
            </div>
            <div className={styles.logoText}>
              <span className={styles.journalAbbr}>PJPS</span>
              <span className={styles.journalFull}>Pakistan Journal of Pharmaceutical Sciences</span>
            </div>
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/" className={styles.navLink}>Home</Link></li>
            <li><Link href="/board" className={styles.navLink}>Editorial Board</Link></li>
            <li><Link href="/issues" className={styles.navLink}>Issues</Link></li>
            <li><Link href="/archive" className={styles.navLink}>Archive</Link></li>
            <li><Link href="/submission" className={styles.navLink}>Submission</Link></li>
            <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search Journal..." className={styles.searchInput} />
            <button className={styles.searchBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
