import { useEffect, useRef, useState } from "react";

import { Navbar } from "@features";
import { HomePage, About, Portfolio } from "@pages";
import { ScrollHint } from "@ui";

import { tools } from "@/data";

import "./app.css";

export default function App() {
  const portfolioRef = useRef(null);

  const [portfolioHt, setPortfolioHt] = useState(null);

  useEffect(() => {
    setPortfolioHt(portfolioRef.current.offsetHeight);

    const handleSiteResize = () => {
      setPortfolioHt(portfolioRef.current.offsetHeight);
    };

    window.addEventListener("resize", handleSiteResize);

    return () => window.removeEventListener("resize", handleSiteResize);
  }, []);

  return (
    <>
      <Navbar />

      <HomePage />
      <About tools={tools} />
      <Portfolio ref={portfolioRef} height={portfolioHt} />

      <ScrollHint className={"scroll_hint"} />
    </>
  );
}
