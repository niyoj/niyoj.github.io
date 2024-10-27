import { useEffect, useRef, useState } from "react";

import { Navbar } from "@features";
import { useDelay } from "@ui";
import {
  HomePage,
  About,
  Portfolio,
  Blogs,
  Contact,
  NavigationPage,
} from "@pages";
import { ScrollHint } from "@ui";

import { tools } from "@/data";

import "./app.css";

export default function App() {
  return (
    <>
      <Navbar />

      <HomePage />
      <About tools={tools} />
      <Portfolio />
      <Blogs />
      <Contact />

      <ScrollHint className={"scroll_hint"} />
    </>
  );
}
