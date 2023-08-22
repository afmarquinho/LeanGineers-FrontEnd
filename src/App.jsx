import { ThemeProvider } from "@emotion/react";
import "./App.css";
import "./Timeline.css";
import "./normalize.css";
import AppRouter from "./router/AppRouter";
import { theme } from "./helpers/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
