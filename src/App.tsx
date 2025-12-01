import { MainLayout } from "@/components/Layout/MainLayout";
import { ThemeProvider } from "@/styles/ThemeProvider";

export const App = () => (
  <ThemeProvider>
    <MainLayout />
  </ThemeProvider>
);
