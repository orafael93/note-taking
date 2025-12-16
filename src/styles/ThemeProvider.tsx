import { useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/global";
import { useThemeStore } from "@/store/theme";
import { initProjectFont, initProjectTheme } from "@/utils";

type ThemeProviderType = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const mode = useThemeStore((state) => state.mode);

  const currentTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      neutral:
        mode === "dark"
          ? theme.colors.neutral
          : {
              0: theme.colors.neutral[950],
              50: theme.colors.neutral[900],
              100: theme.colors.neutral[800],
              200: theme.colors.neutral[700],
              300: theme.colors.neutral[600],
              400: theme.colors.neutral[500],
              500: theme.colors.neutral[400],
              600: theme.colors.neutral[300],
              700: theme.colors.neutral[200],
              800: theme.colors.neutral[100],
              900: theme.colors.neutral[50],
              950: theme.colors.neutral[0],
            },
    },
  };

  useEffect(() => {
    initProjectFont();
    initProjectTheme();
  }, []);

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
