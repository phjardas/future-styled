import { Box, Typography } from "@mui/material";
import Code from "../components/Code";
import { textGradient, textHighlight } from "../components/styles";

export default function Slide() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 8,
        justifyContent: "center",
        alignItems: "center",
        p: 8,
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h2" sx={textGradient("primary")}>
          :has Selector
        </Typography>
        <Typography variant="h5" sx={textHighlight("secondary")}>
          Parent selector magic
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Code language="html">
            {`
<figure>
  <img src="…" />
  <figcaption>…</figcaption>
</figure>
<figure>
  <img src="…" />
</figure>
          `.trim()}
          </Code>
          <Code language="css">
            {`
figure {
  &:has(figcaption) {
    background: white;
    color: black;
    padding: 1rem;

    &, img {
      border-radius: .5rem;
    }
  }
}
`.trim()}
          </Code>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            figure: {
              m: 0,
              "&:has(figcaption)": {
                background: "white",
                color: "black",
                padding: "1rem",
                "&, img": {
                  borderRadius: ".5rem",
                },
              },
            },
          }}
        >
          <figure>
            <img src="https://placehold.co/200x150/c51162/FFF" alt="Image" />
            <Typography component="figcaption" variant="body2">
              This is a caption
            </Typography>
          </figure>
          <figure>
            <img src="https://placehold.co/200x150/c51162/fff" alt="Image" />
          </figure>
        </Box>
      </Box>
    </Box>
  );
}
