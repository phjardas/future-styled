import { Box, GlobalStyles, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Slide() {
  useEffect(() => {
    let hue = 0;
    const timer = setInterval(() => {
      hue = (hue + 1) % 360;
      document.documentElement.style.setProperty("--hue", `${hue}deg`);
    }, 100);
    return () => clearInterval(timer);
  }, []);

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
        <GlobalStyles
          styles={{
            body: {
              "--col-1": `oklch(50% 1 var(--hue))`,
              "--col-2": `oklch(50% 1 calc(var(--hue) + 60deg))`,
              background:
                "linear-gradient(var(--hue), var(--col-1), var(--col-2))",
              transition: "background 100ms linear",
            },
          }}
        />
        <Typography variant="h2">Thank you!</Typography>
      </Box>
    </Box>
  );
}
