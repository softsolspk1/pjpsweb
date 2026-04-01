import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerSection}>
          <div className={styles.footerLogo}>
            <span className={styles.logoAbbr}>PJPS</span>
            <span className={styles.logoFull}>Pakistan Journal of Pharmaceutical Sciences</span>
          </div>
          <p className={styles.footerDesc}>
            A leading global forum for pharmaceutical and biomedical research, 
            published by the Faculty of Pharmacy and Pharmaceutical Sciences, University of Karachi.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}>FB</a>
            <a href="#" className={styles.socialIcon}>TW</a>
            <a href="#" className={styles.socialIcon}>LI</a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>About Journal</h4>
          <ul className={styles.linkList}>
            <li><Link href="/policy">Editorial Policy</Link></li>
            <li><Link href="/metrics">Journal Metrics</Link></li>
            <li><Link href="/indexing">Indexing & Abstracting</Link></li>
            <li><Link href="/ethics">Publication Ethics</Link></li>
            <li><Link href="/openaccess">Open Access Policy</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Contact Info</h4>
          <ul className={styles.contactList}>
            <li>
              <strong>Address:</strong><br />
              Faculty of Pharmacy, University of Karachi, Pakistan.
            </li>
            <li>
              <strong>Email:</strong><br />
              pjps@uok.edu.pk<br />
              pakjps@hotmail.com
            </li>
            <li>
              <strong>Phone:</strong><br />
              +92-21-99261300-15
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContent}`}>
          <p>© {currentYear} Pakistan Journal of Pharmaceutical Sciences. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/terms">Terms of Service</Link>
            <span className={styles.separator}>|</span>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
