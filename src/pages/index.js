import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <div>
            <Heading as="h1" className={styles.title}>
              {siteConfig.title}
            </Heading>

            <p className={styles.subtitle}>{siteConfig.tagline}</p>

            <div className={styles.ctaRow}>
              <Link
                className={styles.primaryBtn}
                to="/docs/homepage"
                aria-label="Read the docs"
              >
                Read Docs
              </Link>

              {/* Optional second button if you want it later:
              <Link className={styles.secondaryBtn} to="/docs">
                Browse Docs
              </Link>
              */}
            </div>
          </div>

          <aside className={styles.heroPanel}>
            <p className={styles.panelTitle}>Quick Start</p>
            <p className={styles.panelText}>
              Jump into the docs to learn the structure, commands, and setup
              flow.
            </p>
          </aside>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description="Bot documentation">
      <div className={clsx("homepage", styles.page)}>
        <div className={styles.container}>
          <HomepageHeader />
        </div>

        {/* Keeping your intent: no features */}
        <main />
      </div>
    </Layout>
  );
}
