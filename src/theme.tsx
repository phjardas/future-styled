import "@fontsource/space-grotesk";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { lightGreen, pink } from "@mui/material/colors";
import { type ReactNode } from "react";

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 24,
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  palette: {
    mode: "dark",
    primary: lightGreen,
    secondary: pink,
  },
  components: {
    MuiAlert: {
      defaultProps: {
        variant: "filled",
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
