import React, { createContext, useState } from "react";
import Home from "./Page/Home";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePage from "./Page/CreatePage";
export const themeContext = createContext();
export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(true);
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
}
function App() {
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
