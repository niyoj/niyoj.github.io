import { forwardRef } from "react";
import PropTypes from "prop-types";

import { SectionHeader } from "@features";
import { getProjects } from "@data";

import styles from "./portfolio.module.css";
import { PortfolioCard } from "./protfolio-card/porfolio-card";

export const Portfolio = forwardRef((props, ref) => {
  const cardNum = 5;

  return (
    <section className={styles["portfolio"]} ref={ref} id="portfolio">
      <div className={styles["portfolio__header"]}>
        <SectionHeader
          title="My projects"
          subtitle="Featuring my recent works"
          description="I merge design, coding, cloud, and AI to create tools that not only help me but also teach me something new along the way."
          inverse={true}
          visible={props.visible}
        />
      </div>

      <div
        className={styles["portfolio__display"]}
        style={{
          width: `calc( ( 400px * 4 / 3 + 1rem ) * ${cardNum} )`,
          animationPlayState: props.visible ? "" : "paused",
        }}
      >
        {getProjects().map((item, index) => (
          <PortfolioCard
            key={index}
            title={item.title}
            name={item.name}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
});

Portfolio.displayName = "Portfolio";
Portfolio.propTypes = {
  visible: PropTypes.bool,
};
