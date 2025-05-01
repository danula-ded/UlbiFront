import { lazy } from "react";

export const AboutPageAsync = lazy(
  // @ts-ignore
  // ИСКУССТВЕННАЯ ЗАДЕРЖКА ПРИ ДЕПЛОЕ УБРАТЬ
  () => new Promise((res) => setTimeout(() => res(import("./AboutPage")), 1500))
);
