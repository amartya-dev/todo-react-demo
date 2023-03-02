import { useMediaQuery } from "@mui/material";
import { Breakpoint, Theme } from "@mui/system";

interface MHiddenProps {
  children?: React.ReactNode;
  width:
    | "xsDown"
    | "xsUp"
    | "smDown"
    | "smUp"
    | "mdDown"
    | "mdUp"
    | "lgDown"
    | "lgUp"
    | "xlDown"
    | "xlUp";
}

export function MHidden({ width, children }: MHiddenProps) {
  const breakpoint = width.substring(0, 2);

  const hiddenUp = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up(breakpoint as Breakpoint)
  );
  const hiddenDown = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down(breakpoint as Breakpoint)
  );

  if (width.includes("Down")) {
    return hiddenDown ? null : children;
  }

  if (width.includes("Up")) {
    return hiddenUp ? null : children;
  }

  return null;
}
