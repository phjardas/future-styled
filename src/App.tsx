import { useState } from "react";
import SlideNavigation from "./SlideNavigation";
import { slides } from "./slides";
import ThemeProvider from "./theme";

export default function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const Slide = slides[slideIndex];

  return (
    <ThemeProvider>
      <Slide key={slideIndex} nextSlide={() => setSlideIndex((i) => i + 1)} />
      <SlideNavigation
        slideIndex={slideIndex}
        totalSlides={slides.length}
        setSlideIndex={setSlideIndex}
      />
    </ThemeProvider>
  );
}
