import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: var(--current-font);
  }

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

  html {
    font-size: 100%; 
  }

  body {
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: var(--font-body);
    line-height: var(--lh-body);
    color: var(--text-primary);
  }

  :root {
  --font-caption: 0.75rem; 
  --font-label: 0.875rem;
  --font-body-sm: 0.9375rem; 
  --font-body: 1rem;
  
  --font-h-sm: 1.125rem; 
  --font-h-md: 1.25rem; 
  --font-h-lg: 1.5rem; 
  --font-h-xl: 1.875rem; 
  
  --font-d-sm: 2.25rem; 
  --font-d-md: 3rem;
  --font-d-lg: clamp(2.75rem, 5vw, 3.75rem);

  --lh-caption: 1.4;
  --lh-body: 1.55;
  --lh-heading: 1.25;
  --lh-display: 1.15;

  --spacing-0: 0px;
  --spacing-25: 0.125rem;
  --spacing-50: 0.25rem;
  --spacing-75: 0.375rem;
  --spacing-100: 0.5rem;
  --spacing-150: 0.75rem;
  --spacing-200: 1rem;
  --spacing-250: 1.25rem;
  --spacing-300: 1.5rem;
  --spacing-400: 2rem;
  --spacing-500: 2.5rem;
  --spacing-600: 3rem;
  --spacing-800: 4rem;
  --spacing-1000: 5rem;

  .text-caption {
    font-size: var(--font-caption);
    line-height: var(--lh-caption);
  }

  .text-label {
    font-size: var(--font-label);
    line-height: var(--lh-body);
  }

  .text-body-sm {
    font-size: var(--font-body-sm);
    line-height: var(--lh-body);
  }

  .text-body {
    font-size: var(--font-body);
    line-height: var(--lh-body);
  }

  .heading-sm {
    font-size: var(--font-h-sm);
    line-height: var(--lh-heading);
    margin-bottom: var(--spacing-100);
  }

  .heading-md {
    font-size: var(--font-h-md);
    line-height: var(--lh-heading);
    margin-bottom: var(--spacing-200);
  }

  .heading-lg {
    font-size: var(--font-h-lg);
    line-height: var(--lh-heading);
    margin-bottom: var(--spacing-200);
  }

  .heading-xl {
    font-size: var(--font-h-xl);
    line-height: var(--lh-heading);
    margin-bottom: var(--spacing-300);
  }

  .display-sm {
    font-size: var(--font-d-sm);
    line-height: var(--lh-display);
    margin-bottom: var(--spacing-300);
  }

  .display-md {
    font-size: var(--font-d-md);
    line-height: var(--lh-display);
    margin-bottom: var(--spacing-400);
  }

  .display-lg {
    font-size: var(--font-d-lg);
    line-height: var(--lh-display);
    margin-bottom: var(--spacing-400);
  }

  --current-font: 'Inter', sans-serif;

  --color-base: #000;
  --color-white: #ffffff;
  --color-black: #000000;

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
    outline-color: var(--color-blue-500);;
  }
`;
