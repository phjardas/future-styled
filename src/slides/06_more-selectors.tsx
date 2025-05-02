import { Box, Typography } from "@mui/material";
import Code from "../components/Code";
import { textGradient } from "../components/styles";

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
          More Selectors
        </Typography>
        <Code language="css">
          {`
:where(button, .btn, input[type="submit"]):hover { … }

form :is(input, select, button) { … }

@scope (.root) to (.leaf) { … }
`.trim()}
        </Code>
      </Box>
    </Box>
  );
}
