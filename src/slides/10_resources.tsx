import { Box, Link, Typography } from "@mui/material";
import { textGradient, textHighlight } from "../components/styles";

export default function Slide() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h2" sx={textGradient("primary")}>
          There's so much more!
        </Typography>
        <Typography variant="h4" sx={textHighlight("secondary")}>
          Check out these links
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="h6">Resources</Typography>
            <Typography>
              <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                MDN: CSS
              </Link>
            </Typography>
            <Typography>
              <Link href="https://web.dev/">web.dev (Google)</Link>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">Newsletters</Typography>
            <Typography>
              <Link href="https://css-weekly.com/">CSS Weekly</Link>
            </Typography>
            <Typography>
              <Link href="https://www.smashingmagazine.com/">
                Smashing Magazine
              </Link>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6">Games</Typography>
            <Typography>
              <Link href="http://www.flexboxdefense.com/">Flexbox Defense</Link>
            </Typography>
            <Typography>
              <Link href="https://cssgridgarden.com/">Grid Garden</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
