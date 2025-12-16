export const theme = {
  colors: {
    neutral: {
      950: "#0E1218",
      900: "#191825",
      800: "#232530",
      700: "#28303B",
      600: "#525866",
      500: "#717784",
      400: "#99A0AE",
      300: "#CACFD8",
      200: "#E0E4EA",
      100: "#F3F5F8",
      50: "#F5F7FA",
      0: "#FFFFFF",
    },
    blue: {
      700: "#2547D0",
      500: "#335CFF",
      50: "#EBF1FF",
    },
    green: {
      500: "#21C16B",
      100: "#D1FBE9",
    },
    red: {
      500: "#FB374B",
      100: "#FFD5D8",
    },
  },
  typography: {
    fonts: {
      inter: "Inter, sans-serif",
      noto: "Noto Serif, serif",
      sourceCode: "Source Code Pro, monospace",
    },
    presets: {
      heading1: {
        fontSize: "24px",
        lineHeight: "120%",
        letterSpacing: "-0.5px",
        fontWeight: "bold",
      },
      heading2: {
        fontSize: "20px",
        lineHeight: "120%",
        letterSpacing: "-0.5px",
        fontWeight: "bold",
      },
      heading3: {
        fontSize: "16px",
        lineHeight: "120%",
        letterSpacing: "-0.3px",
        fontWeight: "600",
      },
      body1: {
        fontSize: "14px",
        lineHeight: "120%",
        letterSpacing: "-0.2px",
        fontWeight: "normal",
      },
      body2: {
        fontSize: "12px",
        lineHeight: "120%",
        letterSpacing: "-0.2px",
        fontWeight: "normal",
      },
    },
  },
  spacing: {
    0: "0px",
    25: "2px",
    50: "4px",
    75: "6px",
    100: "8px",
    150: "12px",
    200: "16px",
    250: "20px",
    300: "24px",
    400: "32px",
    500: "40px",
    600: "48px",
    800: "64px",
    1000: "80px",
  },
};

export type Theme = typeof theme;
