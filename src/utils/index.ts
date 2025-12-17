export const getStoredFont = () => {
  const storedFont = localStorage.getItem("note-taking-font");

  return storedFont === "sans-serif" ||
    storedFont === "serif" ||
    storedFont === "monospace"
    ? (storedFont as string)
    : "sans-serif";
};

export const getStoredTheme = () => {
  const storedTheme = localStorage.getItem("note-taking-theme");

  return storedTheme === "light" || storedTheme === "dark"
    ? storedTheme
    : "light";
};

export const initProjectFont = () => {
  const storedFont = getStoredFont();

  document.documentElement.setAttribute(
    "data-font",
    storedFont || "sans-serif"
  );
};

export const updateProjectFont = (
  fontToUpdate: "sans-serif" | "serif" | "monospace"
) => {
  localStorage.setItem("note-taking-font", fontToUpdate);
  document.documentElement.setAttribute("data-font", fontToUpdate);
};

export const initProjectTheme = () => {
  const storedTheme = getStoredTheme();

  document.documentElement.setAttribute("data-theme", storedTheme || "light");
};

export const updateProjectTheme = (theme: "dark" | "light") => {
  localStorage.setItem("note-taking-theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
};
