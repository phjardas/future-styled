import { type ComponentType } from "react";
import Slide00 from "./00_title";
import Slide01 from "./01_author";
import Slide02 from "./02_quiz";
import Slide03 from "./03_first-letter";
import Slide04 from "./04_nesting";
import Slide05 from "./05_has";
import Slide06 from "./06_more-selectors";
import Slide07 from "./07_container-queries";
import Slide08 from "./08_colors";
import Slide09 from "./09_subgrid";
import Slide10 from "./10_resources";
import Slide11 from "./11_end";
import type { SlideProps } from "./types";

export const slides: ReadonlyArray<ComponentType<SlideProps>> = [
  Slide00,
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide10,
  Slide11,
];
