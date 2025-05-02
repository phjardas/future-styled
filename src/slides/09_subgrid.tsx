import { Box, Paper, Typography } from "@mui/material";
import Code from "../components/Code";
import { textGradient } from "../components/styles";

export default function Slide() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        position: "relative",
      }}
    >
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          variant="h2"
          sx={[textGradient("primary"), { gridColumn: "1 / -1" }]}
        >
          Subgrid
        </Typography>
        <Box
          sx={{
            width: 1024,
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            rowGap: 2,
            position: "relative",
            pt: 5,
          }}
        >
          <Box
            sx={{
              gridColumn: "1 / 7",
              display: "grid",
              gridTemplateColumns: "subgrid",
              height: "6rem",
              bgcolor: "primary.light",
              py: 2,
            }}
          >
            <Box
              sx={{
                gridColumn: "2 / 5",
                height: "100%",
                bgcolor: "primary.dark",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 2,
              }}
            >
              <span>2</span>
              <span>/</span>
              <span>5</span>
            </Box>
          </Box>
          <Box
            sx={{
              gridColumn: "7 / 13",
              display: "grid",
              gridTemplateColumns: "subgrid",
              height: "6rem",
              bgcolor: "secondary.dark",
              py: 2,
            }}
          >
            <Box
              sx={{
                gridColumn: "2 / 5",
                height: "100%",
                bgcolor: "secondary.light",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                px: 2,
              }}
            >
              <span>2</span>
              <span>/</span>
              <span>5</span>
            </Box>
          </Box>
          <Box
            sx={{
              gridColumn: "4 / 9",
              height: "100%",
              bgcolor: "secondary.main",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
            }}
          >
            <span>4</span>
            <span>/</span>
            <span>9</span>
          </Box>
          {[...Array(13).keys()].map((i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                left: `${(i / 12) * 100}%`,
                top: 0,
                bottom: 0,
                width: `${100 / 12}%`,
                background: `rgba(255, 255, 255, ${i % 2 === 0 ? 0 : 0.15})`,
                color: "rgba(255, 255, 255, .5)",
                fontSize: "1rem",
              }}
            >
              <Box sx={{ position: "relative", left: "-0.4rem", mt: 1 }}>
                {i + 1}
              </Box>
            </Box>
          ))}
        </Box>
        <Code language="css">
          {`
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.item {
  display: grid;
  grid-template-columns: subgrid;
}

.item-1 { grid-column: 1 / 7; }
.item-2 { grid-column: 7 / 13; }
.sub-item { grid-column: 2 / 5; }
`.trim()}
        </Code>
      </Paper>
    </Box>
  );
}
