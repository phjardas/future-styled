import { Box, GlobalStyles, Link, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Slide() {
  useEffect(() => {
    let hue = 0;
    const timer = setInterval(() => {
      hue = (hue + 1) % 360;
      document.documentElement.style.setProperty("--hue", `${hue}deg`);
    }, 20);
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
                "linear-gradient(var(--hue) in oklab, var(--col-1), var(--col-2))",
              transition: "background 20ms linear",
            },
          }}
        />
        <Box
          sx={{
            "--c": "rgba(255, 255, 255, .25)",
            width: "40rem",
            aspectRatio: 1,
            background:
              "radial-gradient(circle at 60% 65%, var(--c) 64%,#0000 65%) top left/50% 50%, radial-gradient(circle at 40% 65%, var(--c) 64%,#0000 65%) top right/50% 50%, conic-gradient(from -45deg at 50% 85.5%, var(--c) 90deg,#0000 0) bottom/100% 50%",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: "10rem",
          }}
        >
          <Typography variant="h2">Thank you!</Typography>
          <Typography>
            <Link color="inherit" href="https://jardas.de/future-styled">
              https://jardas.de/future-styled
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
