import { forwardRef } from "react";

import { SectionHeader } from "@features";

import styles from "./portfolio.module.css";
import { PortfolioCard } from "./protfolio-card/porfolio-card";

export const Portfolio = forwardRef((props, ref) => {
  return (
    <section className={styles["portfolio"]} ref={ref}>
      <div className={styles["portfolio__header"]}>
        <SectionHeader
          title="My projects"
          subtitle="Featuring my recent works"
          description="I merge design, coding, cloud, and AI to create tools that not only help me but also teach me something new along the way."
          inverse={true}
        />
      </div>

      <div className={styles["portfolio__display"]}>
        <PortfolioCard title="Focus Timer" name="pomodize"/>
        <PortfolioCard title="Focus Timer" name="pomodize"/>
        <PortfolioCard title="Focus Timer" name="pomodize"/>
        <PortfolioCard title="Focus Timer" name="pomodize"/>
        <PortfolioCard title="Focus Timer" name="pomodize"/>
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";