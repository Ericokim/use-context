import React from "react";
import Theme from "./Theme";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Theme />
    </ThemeProvider>
  );
}

export default App;
