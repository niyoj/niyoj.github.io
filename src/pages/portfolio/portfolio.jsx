import { forwardRef } from "react";

import { Title } from "@ui";

import styles from "./portfolio.module.css";
import { PortfolioCard } from "./protfolio-card/porfolio-card";

export const Portfolio = forwardRef((props, ref) => {
  return (
    <section className={styles["portfolio"]} ref={ref}>
      <header className={styles["portfolio__header"]}>
        <Title inverse={true} solid={true}>
          My Projects
        </Title>
        <h1>Featuring My Recent Works</h1>
      </header>

      <div className={styles["portfolio__display"]}>
        <PortfolioCard tags={["web app"]} />
        <PortfolioCard tags={["AI/ML"]} />
        <PortfolioCard tags={["web app"]} />
        <PortfolioCard tags={["AI/ML"]} />
        <PortfolioCard tags={["web app"]} />
        <PortfolioCard tags={["AI/ML"]} />
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";
