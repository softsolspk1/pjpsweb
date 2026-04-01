import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroBadge}>Leading Global Forum</div>
        <h1 className={styles.heroTitle}>
          Pakistan Journal of Pharmaceutical Sciences
        </h1>
        <p className={styles.heroSubtitle}>
          Dedicated to the advancement and dissemination of pharmaceutical and biomedical research with academic excellence since 1988.
        </p>
        <div className={styles.heroActions}>
          <button className="btn btn-primary">Submit Manuscript</button>
          <button className="btn btn-outline">Browse Current Issue</button>
        </div>
        
        <div className={styles.statsStrip}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>0.6</span>
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
            <span className={styles.statValue}>5875+</span>
            <span className={styles.statLabel}>Total Publications</span>
          </div>
        </div>
      </div>
    </section>
  );
}
