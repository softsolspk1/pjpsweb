import styles from './submission.module.css';

export default function SubmissionPage() {
  return (
    <div className={`container section-padding ${styles.submission}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>Submit Your Manuscript</h1>
        <p className={styles.subtitle}>Join our community of researchers. Follow the steps below to submit your work for review.</p>
      </div>

      <div className={styles.submissionGrid}>
        <div className={styles.instructionCard}>
          <h3>Submission Guidelines</h3>
          <ul>
            <li>Prepare your manuscript in English.</li>
            <li>Ensure all authors have approved the final version.</li>
            <li>Use the standard PJPS template for formatting.</li>
            <li>Include a cover letter and conflict of interest statement.</li>
          </ul>
          <button className="btn btn-secondary">Download Author Template</button>
        </div>

        <div className={styles.formPlaceholder}>
          <div className={styles.formHeader}>
            <div className={styles.step}>Step 1: Article Information</div>
          </div>
          <div className={styles.formBody}>
            <div className={styles.formGroup}>
              <label>Article Title *</label>
              <input type="text" placeholder="Enter the full title of your research" />
            </div>
            <div className={styles.formGroup}>
              <label>Article Type *</label>
              <select>
                <option>Original Research</option>
                <option>Review Article</option>
                <option>Case Study</option>
                <option>Short Communication</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Abstract *</label>
              <textarea placeholder="Enter a brief abstract (max 300 words)"></textarea>
            </div>
            <button className="btn btn-primary" disabled>Next Step</button>
            <p className={styles.note}>This form is currently a visual mockup. Full submission functionality will be connected to the backend.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
