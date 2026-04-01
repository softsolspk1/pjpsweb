import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import styles from "./page.module.css";

const MOCK_ARTICLES = [
  {
    category: "Clinical Research",
    title: "Clinical characteristics and factors affecting quality of life in children with congenital adrenal hyperplasia",
    authors: "Shiyi Xu, Zhen Li, Qingxian Fu, Qiuting Lin, Hui Liu",
    doi: "2026/03/1774515854",
    id: "7750",
    date: "March 2026"
  },
  {
    category: "Pharmacology",
    title: "Pharmacodynamic basis of gabapentin combined with Hegu-point catgut embedding for post-herpetic neuralgia",
    authors: "Li-Ping Li, Zong-Zhou Song, Yang Zheng, Ting Wu, Fang-Wei Li, Yan Huang",
    doi: "2026/03/1774516005",
    id: "7751",
    date: "March 2026"
  },
  {
    category: "Sepsis Research",
    title: "Impact of ceftazidime/avibactam combined dynamic nutritional support on intestinal barrier function in sepsis patients",
    authors: "Xiaojuan Sha, Lijuan Sun, Jun Wu",
    doi: "2026/03/1774516263",
    id: "7752",
    date: "March 2026"
  },
  {
    category: "Neurology",
    title: "Effect of edaravone on synaptic damage in Alzheimer's disease via Rho/ROCK signaling",
    authors: "Yuejun Li, Qiuyue Lai, Qiong Li, Yixie Fan",
    doi: "2026/03/1774691677",
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
          <p className={styles.sectionSubtitle}>Explore the most recent contributions to pharmaceutical sciences.</p>
        </div>
        <div className={styles.articlesGrid}>
          {MOCK_ARTICLES.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
        <div className={styles.viewMore}>
          <button className="btn btn-secondary">View All Articles</button>
        </div>
      </section>

      <section className={`${styles.indexingSection} section-padding`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Abstracting & Indexing</h2>
            <p className={styles.sectionSubtitle}>PJPS is recognized and indexed by leading scientific databases world-wide.</p>
          </div>
          <div className={styles.indexingGrid}>
            <div className={styles.indexItem}>Scopus</div>
            <div className={styles.indexItem}>Clarivate</div>
            <div className={styles.indexItem}>PubMed</div>
            <div className={styles.indexItem}>EMBASE</div>
            <div className={styles.indexItem}>DOAJ</div>
            <div className={styles.indexItem}>Index Copernicus</div>
          </div>
        </div>
      </section>

      <section className="section-padding container">
        <div className={styles.aboutJournal}>
          <div className={styles.aboutText}>
            <h2>About the Journal</h2>
            <p>
              Pakistan Journal of Pharmaceutical Sciences (PJPS) is a peer-reviewed multi-disciplinary pharmaceutical sciences journal. 
              The PJPS has been published since 1988 by the Faculty of Pharmacy and Pharmaceutical Sciences, University of Karachi.
            </p>
            <p>
              The journal covers Biological, Pharmaceutical, Drug Delivery, Pharmacy Management, Molecular Biology, 
              Biopharmaceutics, Biochemical Pharmacology, and more.
            </p>
            <button className="btn btn-primary">Read More About Us</button>
          </div>
          <div className={styles.aboutStats}>
            <div className={styles.aboutStat}>
              <span className={styles.statNum}>35+</span>
              <span className={styles.statLabel}>Years of Excellence</span>
            </div>
            <div className={styles.aboutStat}>
              <span className={styles.statNum}>12k+</span>
              <span className={styles.statLabel}>Total Citations</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
