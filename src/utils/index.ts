import { UserData } from "@/store/types";

export const getStoredFont = () => {
  const storedFont = localStorage.getItem("note-taking-font");

  return storedFont === "sans-serif" ||
    storedFont === "serif" ||
    storedFont === "monospace"
    ? (storedFont as string)
    : "sans-serif";
};

export const getStoredTheme = () => {
  const storedTheme =
    localStorage.getItem("note-taking-theme") || getSystemTheme();

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

export const handleTags = (tag: string) =>
  tag
    .split(",")
    .map((currentTag) => currentTag.trim().replaceAll(/[^a-zA-Z,\s]/g, ""));

export const capitalizeTag = (tag: string) =>
  `${tag[0]?.toUpperCase()}${tag?.slice(1)}`;

export const getSystemTheme = () =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

export const getUserAccount = () => {
  const email = localStorage.getItem("note-taking-app-email");
  const password = localStorage.getItem("note-taking-app-password");
  const logout = Boolean(localStorage.getItem("note-taking-app-logout"));

  return {
    email,
    password,
    logout,
  };
};

export const storeUserAccount = (param: UserData) => {
  if (param.email) {
    localStorage.setItem("note-taking-app-email", param.email);
  }

  if (param.password) {
    localStorage.setItem("note-taking-app-password", param.password);
  }

  if (!param.logout) {
    localStorage.removeItem("note-taking-app-logout");
    return;
  }

  localStorage.setItem(
    "note-taking-app-logout",
    JSON.stringify(param.logout) || "false"
  );
};
