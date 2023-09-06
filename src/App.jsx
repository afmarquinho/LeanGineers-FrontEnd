import "./App.css";
import "./Timeline.css";
import "./normalize.css";
import AppRouter from "./router/AppRouter";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import { useContext } from "react";
import DarkContext from "./context/DarkProvider";
import { ThemeProvider } from "styled-components";



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

