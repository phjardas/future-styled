import { Box, Typography } from "@mui/material";
import { textGradient, textHighlight } from "../components/styles";

export default function Slide() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        minHeight: "100vh",
        gap: 1,
        px: [4, 8],
        pb: [8, 16],
        textTransform: "uppercase",
      }}
    >
      <Typography variant="h1" sx={textGradient("primary")}>
        The Future
        <br />
        Is Styled
      </Typography>
      <Typography variant="h2" sx={textHighlight("secondary")}>
        CSS you'll actually want to use
      </Typography>
      <Typography variant="h3">Philipp Jardas</Typography>
    </Box>
  );
}
