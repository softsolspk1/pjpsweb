'use client';

import { useEffect } from 'react';
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
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(`.${styles.reveal}`);
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.home}>
      <Hero />
      
      <section className={`${styles.reveal} section-padding container`}>
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
          <button className="btn btn-secondary">Browse Full Archive</button>
        </div>
      </section>

      <section className={`${styles.indexingSection} ${styles.reveal} section-padding`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.preTitle}>Trusted Globally</span>
            <h2 className={styles.sectionTitle}>Scientific Impact & Recognition</h2>
            <p className={styles.sectionSubtitle}>PJPS is recognized and abstracted by the world's most prestigious scientific databases.</p>
          </div>
          <div className={styles.indexingGrid}>
            <div className={styles.indexItem}>
              <div className={styles.indexIcon}>S</div>
              <span>Scopus (Elsevier)</span>
            </div>
            <div className={styles.indexItem}>
              <div className={styles.indexIcon}>W</div>
              <span>Web of Science</span>
            </div>
            <div className={styles.indexItem}>
              <div className={styles.indexIcon}>P</div>
              <span>PubMed / MEDLINE</span>
            </div>
            <div className={styles.indexItem}>
              <div className={styles.indexIcon}>E</div>
              <span>EMBASE</span>
            </div>
            <div className={styles.indexItem}>
              <div className={styles.indexIcon}>D</div>
              <span>DOAJ</span>
            </div>
            <div className={styles.indexItem}>
              <div className={styles.indexIcon}>C</div>
              <span>CABI</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.reveal} section-padding container`}>
        <div className={styles.aboutJournal}>
          <div className={styles.aboutText}>
            <span className={styles.preTitle}>Our Heritage</span>
            <h2>Established Excellence</h2>
            <p>
              The <strong>Pakistan Journal of Pharmaceutical Sciences (PJPS)</strong> is a peer-reviewed 
              multi-disciplinary pharmaceutical sciences journal. Founded in 1988 by the 
              <strong> Faculty of Pharmacy and Pharmaceutical Sciences, University of Karachi</strong>, 
              it stands as a premier platform for global scientific discourse.
            </p>
            <p>
              Our mission is to foster innovation across drug delivery, pharmacology, and clinical research, 
              maintaining a fully open-access policy that ensures unrestricted knowledge sharing worldwide.
            </p>
            <div className={styles.aboutActions}>
              <button className="btn btn-primary">Learn more about us</button>
              <button className="btn btn-outline">Editor-in-Chief Message</button>
            </div>
          </div>
          <div className={styles.aboutStatsGrid}>
            <div className={styles.impactCard}>
              <span className={styles.impactNum}>35+</span>
              <span className={styles.impactLabel}>Years of Peer Review</span>
            </div>
            <div className={styles.impactCardGold}>
              <span className={styles.impactNum}>HEC</span>
              <span className={styles.impactLabel}>Platinum Category</span>
            </div>
            <div className={styles.impactCard}>
              <span className={styles.impactNum}>100+</span>
              <span className={styles.impactLabel}>Countries Represented</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

