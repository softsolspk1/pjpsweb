import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroBadge}>Academic Excellence Since 1988</div>
        <h1 className={styles.heroTitle}>
          Pakistan Journal of Pharmaceutical Sciences
        </h1>
        <p className={styles.heroSubtitle}>
          A world-class forum for the dissemination of pharmaceutical and biomedical research, 
          recognized by HEC and indexed in Web of Science and Scopus.
        </p>
        <div className={styles.heroActions}>
          <button className="btn btn-primary">Submit Manuscript</button>
          <button className="btn btn-outline">Current Issue</button>
        </div>
        
        <div className={styles.statsStrip}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>0.601</span>
            <span className={styles.statLabel}>Impact Factor</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>1.4</span>
            <span className={styles.statLabel}>CiteScore</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>1011-601X</span>
            <span className={styles.statLabel}>ISSN (Print)</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>6,000+</span>
            <span className={styles.statLabel}>Publications</span>
          </div>
        </div>
      </div>
    </section>
  );
}
