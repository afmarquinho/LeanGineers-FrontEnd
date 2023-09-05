import { Global, ThemeProvider, css } from "@emotion/react";
import "./App.css";
import "./Timeline.css";
import "./normalize.css";
import AppRouter from "./router/AppRouter";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { useContext } from "react";
import DarkContext from "./context/DarkProvider";



function App() {
  const {darkMode } = useContext(DarkContext);
  return (
    <ThemeProvider theme={theme}>
       <GlobalStyles darkMode={darkMode} />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;

