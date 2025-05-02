import { Person } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  GlobalStyles,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
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
      <GlobalStyles styles={{ ".info": {} }} />
      <Box
        sx={{
          width: 1024,
          display: "flex",
          flexDirection: "column",
          border: "1px solid var(--mui-palette-divider)",
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <Avatar sx={{ mr: 1, bgcolor: "primary.light" }}>C</Avatar>
            <Typography variant="h6" sx={textGradient("primary")}>
              Container Queries
            </Typography>
            <Avatar sx={{ ml: "auto" }}>
              <Person />
            </Avatar>
          </Toolbar>
        </AppBar>
        <Box sx={{ display: "flex", flex: 1 }}>
          <Box
            component="main"
            sx={{
              p: 2,
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6">Main Content</Typography>
            <InfoBox />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
                mt: 2,
              }}
            >
              <Box sx={{ containerType: "inline-size" }}>
                <InfoBox />
              </Box>
              <Box sx={{ containerType: "inline-size" }}>
                <InfoBox />
              </Box>
              <Box sx={{ containerType: "inline-size" }}>
                <InfoBox />
              </Box>
            </Box>
          </Box>
          <Paper
            component="aside"
            sx={{ p: 2, width: "20rem", containerType: "size" }}
          >
            <Typography variant="h6">Sidebar</Typography>
            <InfoBox />
          </Paper>
        </Box>
      </Box>
      <Code language="css">
        {`
:where(main, aside) {
  container-type: size;
}

.column {
  container-type: inline-size;
}

.info {
  background-color: pink;
}

@container(max-width: 300px) {
  .info {
    background-color: green;
  }
}
            `.trim()}
      </Code>
    </Box>
  );
}

function InfoBox() {
  return (
    <Box
      sx={{
        bgcolor: "secondary.dark",
        borderRadius: 1,
        py: 1,
        px: 2,
        display: "flex",
        flexDirection: "column",
        "@container(max-width: 300px)": {
          bgcolor: "primary.dark",
        },
      }}
      className="info"
    >
      <Typography sx={{ whiteSpace: "nowrap" }}>Info Box</Typography>
      <Typography variant="caption">
        Some informative text. This could well be a longer paragraph for
        demonstration purposes.
      </Typography>
    </Box>
  );
}
