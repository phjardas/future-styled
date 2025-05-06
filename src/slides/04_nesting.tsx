import { Box, Paper, Typography } from "@mui/material";
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
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h2" sx={textGradient("primary")}>
          Nesting
        </Typography>
        <Typography variant="h5" sx={textHighlight("secondary")}>
          Like SCSS, but built-in.
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Code language="css">
            {`
.a {
  display: flex;
  gap: 2;

  &:hover {
    color: lightpink;
  }

  .b {
    background: purple;
  }
}
`.trim()}
          </Code>
          <Paper
            sx={{
              p: 2,
              "&:hover": { color: "secondary.light" },
              ".b": { bgcolor: "secondary.dark" },
            }}
          >
            <Typography variant="body2">&lt;div class="a"&gt;</Typography>
            <Typography variant="body2" className="b" sx={{ ml: 4 }}>
              &lt;div class="b" /&gt;
            </Typography>
            <Typography variant="body2">&lt;/div&gt;</Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
