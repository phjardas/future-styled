export function textGradient(color: string) {
  return {
    background: `linear-gradient(180deg, var(--mui-palette-${color}-light), var(--mui-palette-${color}-dark))`,
    color: "primary.contrastText",
    backgroundClip: "text",
    textFillColor: "transparent",
  };
}

export function textHighlight(color: string) {
  return {
    display: "inline",
    background: `linear-gradient(180deg, var(--mui-palette-${color}-light), var(--mui-palette-${color}-dark))`,
    color: `${color}.contrastText`,
  };
}
