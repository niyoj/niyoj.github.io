import { SectionHeader } from "@features";

import styles from "./blogs.module.css";

export function Blogs() {
  return (
    <section className={styles["blogs"]}>
      <SectionHeader
        title="My blogs"
        subtitle="Some of my writings"
        description="I enjoy sharing what I've learned, collecting insights and experiences into blogs that I share to help others explore new ideas and skills."
      />
    </section>
  );
}
