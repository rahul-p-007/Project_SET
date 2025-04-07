import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App, { ThemeContextProvider } from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
