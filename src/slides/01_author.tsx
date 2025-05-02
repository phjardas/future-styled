import { Box, Typography } from "@mui/material";
import { textGradient } from "../components/styles";
import phjardas from "./phjardas.avif";

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
        component="img"
        src={phjardas}
        alt="Portrait of Philipp Jardas"
        width="30%"
        height="auto"
        sx={{ aspectRatio: 1, borderRadius: 4 }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h2" sx={textGradient("primary")}>
          Philipp Jardas
        </Typography>
        <Typography variant="h5">
          Full-Stack Software Engineer
          <br />
          codecentric &amp; rescueTABLET
        </Typography>
        <Typography>Cloud-native, serverless, AWS, PWAs</Typography>
        <Typography>TypeScript, React</Typography>
        <Typography>
          Firefighter, Ultimate Frisbee, Running, Music, non-violent
          communication
        </Typography>
      </Box>
    </Box>
  );
}
