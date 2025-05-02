import { Avatar, Box, GlobalStyles, Paper, Typography } from "@mui/material";
import { useState } from "react";
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
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 4,
        }}
      >
        <Typography variant="h2" sx={textGradient("primary")}>
          Color Functions
        </Typography>
        <ColorMix />
      </Paper>
    </Box>
  );
}

function ColorMix() {
  const [color1, setColor1] = useState("#00ffff");
  const [colorPercent1, setColorPercent1] = useState(50);
  const [color2, setColor2] = useState("#ffff00");
  const [colorPercent2, setColorPercent2] = useState(50);
  const [lDelta, setLDelta] = useState(-0.2);
  const [hDelta, setHDelta] = useState(140);

  return (
    <Box
      sx={{
        "--icon-width": "3rem",
        display: "grid",
        gridTemplateColumns: "var(--icon-width) 1fr",
        gap: 2,
      }}
    >
      <GlobalStyles
        styles={{
          body: {
            px: 2,
            py: 1,
            "--color-1": `color-mix(in lch, ${color1} ${colorPercent1}%, ${color2} ${colorPercent2}%)`,
            "--color-2": `oklch(from var(--color-1) calc(l + ${lDelta}) c calc(h + ${hDelta}))`,
            background:
              "linear-gradient(180deg, var(--color-1), var(--color-2))",
          },
        }}
      />
      <input
        type="color"
        value={color1}
        onChange={(e) => setColor1(e.target.value)}
        style={{ width: "var(--icon-width)", height: "var(--icon-width)" }}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={colorPercent1}
        onChange={(e) => setColorPercent1(parseInt(e.target.value, 10))}
        style={{ width: "100%" }}
      />
      <input
        type="color"
        value={color2}
        onChange={(e) => setColor2(e.target.value)}
        style={{ width: "var(--icon-width)", height: "var(--icon-width)" }}
      />
      <input
        type="range"
        min="0"
        max="100"
        value={colorPercent2}
        onChange={(e) => setColorPercent2(parseInt(e.target.value, 10))}
        style={{ width: "100%" }}
      />
      <Avatar
        sx={{
          width: "var(--icon-width)",
          height: "var(--icon-width)",
          bgcolor: "primary.light",
        }}
      >
        L
      </Avatar>
      <input
        type="range"
        min="-1"
        max="1"
        step="0.1"
        value={lDelta}
        onChange={(e) => setLDelta(parseFloat(e.target.value))}
        style={{ width: "100%" }}
      />
      <Avatar
        sx={{
          width: "var(--icon-width)",
          height: "var(--icon-width)",
          bgcolor: "secondary.light",
        }}
      >
        H
      </Avatar>
      <input
        type="range"
        min="-180"
        max="180"
        value={hDelta}
        onChange={(e) => setHDelta(parseFloat(e.target.value))}
        style={{ width: "100%" }}
      />
      <Box component={Code} language="css" sx={{ gridColumn: "1 / -1" }}>
        {`
--color-1: color-mix(in lch, ${color1} ${colorPercent1}%, ${color2} ${colorPercent2}%);
--color-2: oklch(from var(--color-1) calc(l + ${lDelta}) c calc(h + ${hDelta}));
background: linear-gradient(180deg, var(--color-1), var(--color-2));
        `.trim()}
      </Box>
    </Box>
  );
}
