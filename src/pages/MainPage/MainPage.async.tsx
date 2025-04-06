import { lazy } from "react";

export const MainPageAsync = lazy(
  // @ts-ignore
  // ИСКУССТВЕННАЯ ЗАДЕРЖКА ПРИ ДЕПЛОЕ УБРАТЬ
  () => new Promise((res) => setTimeout(() => res(import("./MainPage")), 1500))
);
