import Contacto from "../ui/Contacto";
import Navbar from "../ui/Navbar";
import { Link } from "react-router-dom";
import useDark from "../helpers/useDark";
import { styled } from "styled-components";
import Footer from "../ui/Footer";

const Layout = ({ children }) => {
  const { darkMode, setDarkMode } = useDark();

  const darkActivation = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Contacto darkMode={darkMode} />
      <Button className="m-0 p-0" onClick={darkActivation} $darkMode={darkMode}>
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        )}
      </Button>
       <Main>
        {children}
        <Footer/>
      </Main> 
      <Navbar /> 
    </>
  );
};

export default Layout;
const Main = styled.main`
  top: 4rem;
  width: 100%;
  position: absolute;
  overflow-x: hidden;
`;





const Button = styled.button`
  width: 4rem;
  height: 3rem;
  background-color: ${(props) =>
    props.$darkMode
      ? props.theme.light.background
      : props.theme.dark.background};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;
  position: fixed;
  z-index: 1000;
  svg {
    color: ${(props) =>
      props.$darkMode
        ? props.theme.light.textColor
        : props.theme.dark.textColor};
    width: 20px;
    height: 20px;
  }
`;
