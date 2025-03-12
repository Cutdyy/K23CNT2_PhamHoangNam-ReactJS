import React from "react";
import PhnUseState from "./components/PhnUseState";
import PhnUseEffect from "./components/PhnUseEffect";
import { PhnThemeProvider } from "./context/PhnThemeContext"; // Thêm theme context

export default function PhnApp() {
  return (
    <PhnThemeProvider>
      <div className="container border my-2 p-3">
        <h1 className="text-center">Demo React Hook</h1>

        {/* Phần quản lý useState */}
        <section className="p-3 border rounded my-3 bg-light">
          <h2>useState Demo</h2>
          <PhnUseState />
        </section>

        {/* Phần quản lý useEffect */}
        <section className="p-3 border rounded my-3 bg-light">
          <h2>useEffect Demo</h2>
          <PhnUseEffect />
        </section>
      </div>
    </PhnThemeProvider>
  );
}
