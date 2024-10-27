import { SectionHeader } from "@features";

import styles from "./blogs.module.css";
import { BlogCard } from "./blog-card/blog-card";

const dummyBlog = {
  readTime: 8,
  publishedDate: "2020 december 12",
  title: "What are portals in React? A practical guide",
  description:
    "Not only can Doctor Strange in the MCU create portals, but as a React developer, so can you! This blog is a mighty scroll that helps you master the React portals so that you can teleport those React components on your own.",
};

export function Blogs() {
  return (
    <section className={styles["blogs"]}>
      <SectionHeader
        title="My blogs"
        subtitle="Some of my writings"
        description="I enjoy sharing what I've learned, collecting insights and experiences into blogs that I share to help others explore new ideas and skills."
      />

      <div className={styles["blogs__display"]}>
        <BlogCard
          readTime={dummyBlog["readTime"]}
          publishedDate={dummyBlog["publishedDate"]}
          title={dummyBlog["title"]}
          description={dummyBlog["description"]}
        />
        <BlogCard
          readTime={dummyBlog["readTime"]}
          publishedDate={dummyBlog["publishedDate"]}
          title={dummyBlog["title"]}
          description={dummyBlog["description"]}
        />
        <BlogCard
          readTime={dummyBlog["readTime"]}
          publishedDate={dummyBlog["publishedDate"]}
          title={dummyBlog["title"]}
          description={dummyBlog["description"]}
        />
        <BlogCard
          readTime={dummyBlog["readTime"]}
          publishedDate={dummyBlog["publishedDate"]}
          title={dummyBlog["title"]}
          description={dummyBlog["description"]}
        />
      </div>
    </section>
  );
}