import { Box, Typography } from "@mui/material";
import Code from "../components/Code";

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
        <Typography
          sx={{
            "&::first-letter": {
              background: "purple",
              float: "left",
              fontSize: "5rem",
              padding: "0 2rem",
              marginRight: "1rem",
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          rhoncus tristique imperdiet. Etiam enim augue, accumsan porttitor nunc
          vitae, feugiat imperdiet leo. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Aliquam commodo mauris ut lobortis finibus. Phasellus
          scelerisque eu massa nec pretium. Nam consequat auctor nibh, eget
          aliquet massa auctor eu. Ut quis arcu id quam eleifend scelerisque
          viverra a mauris. Aenean nulla dui, efficitur vitae sagittis tempus,
          hendrerit sed est.
        </Typography>
        <Code language="css">
          {`
::first-letter {
  background: purple;
  float: left;
  font-size: 5rem;
  padding: 0 2rem;
  margin-right: 1rem;
}
`.trim()}
        </Code>
      </Box>
    </Box>
  );
}
