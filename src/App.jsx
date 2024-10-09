import { Navbar } from "@features";
import { HomePage } from "@pages";
import { ScrollHint } from "@ui";

import "./app.css";

export default function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <ScrollHint className={"scroll_hint"} />
    </>
  );
}
