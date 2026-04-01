import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import styles from "./page.module.css";

const LATEST_ARTICLES = [
  {
    category: "Clinical Research",
    title: "Clinical characteristics and factors affecting quality of life in children with congenital adrenal hyperplasia",
    authors: "Shiyi Xu, Zhen Li, Qingxian Fu, Qiuting Lin, Hui Liu",
    doi: "10.36721/PJPS.2026.39.3.REG.1602",
    id: "7750",
    date: "March 2026"
  },
  {
    category: "Pharmacology",
    title: "Pharmacodynamic basis of gabapentin combined with Hegu-point catgut embedding for post-herpetic neuralgia",
    authors: "Li-Ping Li, Zong-Zhou Song, Yang Zheng, Ting Wu, Fang-Wei Li, Yan Huang",
    doi: "10.36721/PJPS.2026.39.3.REG.1611",
    id: "7751",
    date: "March 2026"
  },
  {
    category: "Sepsis Research",
    title: "Impact of ceftazidime/avibactam combined dynamic nutritional support on intestinal barrier function in sepsis patients",
    authors: "Xiaojuan Sha, Lijuan Sun, Jun Wu",
    doi: "10.36721/PJPS.2026.39.3.REG.1618",
    id: "7752",
    date: "March 2026"
  },
  {
    category: "Neurology",
    title: "Effect of edaravone on synaptic damage in Alzheimer's disease via Rho/ROCK signaling",
    authors: "Yuejun Li, Qiuyue Lai, Qiong Li, Yixie Fan",
    doi: "10.36721/PJPS.2026.39.3.REG.1625",
    id: "7757",
    date: "March 2026"
  }
];

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero />
      
      <section className="section-padding container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Latest Research</h2>
          <p className={styles.sectionSubtitle}>Discover the most recent peer-reviewed contributions to the pharmaceutical sciences.</p>
        </div>
        <div className={styles.articlesGrid}>
          {LATEST_ARTICLES.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
        <div className={styles.viewMore}>
          <button className="btn btn-secondary">Browse Archive</button>
        </div>
      </section>

      <section className={`${styles.indexingSection} section-padding`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Global Indexing & Accreditation</h2>
            <p className={styles.sectionSubtitle}>PJPS is recognized and abstracted by the world's most prestigious scientific databases.</p>
          </div>
          <div className={styles.indexingGrid}>
            <div className={styles.indexItem}>Scopus (Elsevier)</div>
            <div className={styles.indexItem}>Web of Science (Clarivate)</div>
            <div className={styles.indexItem}>PubMed / MEDLINE</div>
            <div className={styles.indexItem}>EMBASE</div>
            <div className={styles.indexItem}>DOAJ</div>
            <div className={styles.indexItem}>CABI</div>
          </div>
        </div>
      </section>

      <section className="section-padding container">
        <div className={styles.aboutJournal}>
          <div className={styles.aboutText}>
            <h2>About PJPS</h2>
            <p>
              The <strong>Pakistan Journal of Pharmaceutical Sciences (PJPS)</strong> is a peer-reviewed multi-disciplinary 
              pharmaceutical sciences journal. Established in 1988 by the <strong>Faculty of Pharmacy and Pharmaceutical Sciences, 
              University of Karachi</strong>, it provides a prestigious platform for researchers worldwide.
            </p>
            <p>
              The journal covers an expansive range of topics including Biological and Pharmaceutical sciences, 
              Drug Delivery, Pharmacy Management, Biopharmaceutics, Pharmacokinetics, and AI-associated innovations in pharmacy.
            </p>
            <p>
              PJPS adheres to a fully open-access policy, ensuring that all published content is freely accessible 
              to readers worldwide under the Creative Commons Attribution-Noncommercial 4.0 International License.
            </p>
            <button className="btn btn-primary">Learn More About Us</button>
          </div>
          <div className={styles.aboutStats}>
            <div className={styles.aboutStat}>
              <span className={styles.statNum}>35+</span>
              <span className={styles.statLabel}>Years of Excellence</span>
            </div>
            <div className={styles.aboutStat}>
              <span className={styles.statNum}>HEC</span>
              <span className={styles.statLabel}>Directly Recognized</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
