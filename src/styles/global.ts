import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap; 
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/Inter/inter-300.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/Inter/inter-500.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/Inter/inter-800.woff2') format('woff2'); 
  }

  
  @font-face {
    font-display: swap;
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/NotoSerif/noto-serif-300.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/NotoSerif/noto-serif-500.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Noto Serif';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/NotoSerif/noto-serif-800.woff2') format('woff2');
  }

  
  @font-face {
    font-display: swap;
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/SourceCodePro/source-code-pro-300.woff2') format('woff2');
  }
  
  @font-face {
    font-display: swap;
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/SourceCodePro/source-code-pro-500.woff2') format('woff2');
  }
  
  @font-face {
    font-display: swap;
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/SourceCodePro/source-code-pro-800.woff2') format('woff2');
  }

  :root {
    --current-font: 'Inter', sans-serif;
  }

  [data-font="serif"] {
    --current-font: 'Noto Serif', serif;
  }

  [data-font="monospace"] {
    --current-font: 'Source Code Pro', monospace;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: var(--current-font);
  }

  body {
    background: ${({ theme }) => theme.colors.neutral[900]};
    color: ${({ theme }) => theme.colors.neutral[100]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    border: none;
  }

  button {
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, a {
    border: none;
    background: transparent;
    outline: 2px solid transparent;
    
    padding: 4px;
    border-radius: 4px;
  }

  button:focus-visible, a:focus-visible {
    outline-color: ${({ theme }) => theme.colors.blue[500]};;
  }
`;
