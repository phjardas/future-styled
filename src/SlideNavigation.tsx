import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export default function SlideNavigation({
  slideIndex,
  totalSlides,
  setSlideIndex,
}: {
  slideIndex: number;
  totalSlides: number;
  setSlideIndex: Dispatch<SetStateAction<number>>;
}) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        pb: 2,
      }}
    >
      <IconButton
        onClick={() => setSlideIndex((i) => i - 1)}
        disabled={slideIndex <= 0}
      >
        <ArrowBack />
      </IconButton>
      <IconButton
        onClick={() => setSlideIndex((i) => i + 1)}
        disabled={slideIndex >= totalSlides - 1}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
}
