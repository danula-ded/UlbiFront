import React, { Suspense, useContext, useState } from "react";
import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { className } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={className("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>

      <br />

      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
