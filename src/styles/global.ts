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

    --color-base: #000;

    --color-neutral-0: #FFFFFF;
    --color-neutral-50: #F5F7FA;
    --color-neutral-100: #F3F5F8;
    --color-neutral-200: #E0E4EA;
    --color-neutral-300: #CACFD8;
    --color-neutral-400: #99A0AE;
    --color-neutral-500: #717784;
    --color-neutral-600: #525866;
    --color-neutral-700: #28303B;
    --color-neutral-800: #232530;
    --color-neutral-900: #191825;
    --color-neutral-950: #0E1218;

    --color-blue-50: #EBF1FF;
    --color-blue-500: #335CFF;
    --color-blue-700: #2547D0;

    --color-green-100: #21C16B;
    --color-green-500: #D1FBE9;

    --color-red-100: #FFD5D8;
    --color-red-500: #FB374B;
  }

  [data-theme="dark"] {
    --color-base: #fff;

    --color-neutral-0: #0E1218;
    --color-neutral-50: #191825;
    --color-neutral-100: #232530;
    --color-neutral-200: #28303B;
    --color-neutral-300: #525866;
    --color-neutral-400: #717784;
    --color-neutral-500: #99A0AE;
    --color-neutral-600: #CACFD8;
    --color-neutral-700: #E0E4EA;
    --color-neutral-800: #F3F5F8;
    --color-neutral-900: #F5F7FA;
    --color-neutral-950: #FFFFFF;
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
    background-color: var(--color-neutral-0);
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
