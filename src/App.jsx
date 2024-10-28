import { useEffect, useRef, useState } from "react";

import { Navbar } from "@features";
import { HomePage, About, Portfolio, Blogs, Contact } from "@pages";
import { ScrollHint } from "@ui";

import { tools } from "@/data";

import "./app.css";

const findEntry = (entries, ref) =>
  entries.find((entry) => {
    return entry.target === ref.current;
  });

const toggleVisibility = (entry, setState, threshold = 0.7) => {
  if (entry) setState(entry.intersectionRatio >= threshold);
};

export default function App() {
  const [homepageVisible, setHomepageVisible] = useState(true);
  const [contactVisible, setContactVisible] = useState(false);
  const [blogsVisible, setBlogsVisible] = useState(false);

  const homepageRef = useRef(null);
  const contactRef = useRef(null);
  const blogsRef = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        // finding entries for each section
        const homepageEntry = findEntry(entries, homepageRef);
        const contactEntry = findEntry(entries, contactRef);
        const blogsEntry = findEntry(entries, blogsRef);

        // for each entry if visible set state
        toggleVisibility(contactEntry, setContactVisible);
        toggleVisibility(blogsEntry, setBlogsVisible);
        toggleVisibility(homepageEntry, setHomepageVisible);
      },
      {
        // root: document.querySelector("#root"),
        threshold: [0, 0.7, 1],
      },
    );

    // get all sections to observe
    const sections = document.querySelectorAll("#root > section");
    sections.forEach((section) => {
      scrollObserver.observe(section);
    });

    return () => scrollObserver.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <HomePage visible={homepageVisible} ref={homepageRef} />
      <About tools={tools} />
      <Portfolio />
      <Blogs visible={blogsVisible} ref={blogsRef} />
      <Contact visible={contactVisible} ref={contactRef} />

      <ScrollHint className={"scroll_hint"} />
    </>
  );
}
