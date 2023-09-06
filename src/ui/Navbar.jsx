import { styled } from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import useDark from "../helpers/useDark";
import { theme } from "../styles/theme";

const Navbar = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const { darkMode } = useDark();
  const onShow = () => {
    setMostrarMenu(!mostrarMenu);
  };
  const onChange = () => {
    setMostrarMenu(false);
  };
  return (
    <>
      <ContentContainer
        className={`m-0 w-100 p-100 d-flex ${
          mostrarMenu ? "scaled1" : "scaled0"
        }`}
        $darkMode={darkMode}
      >
        <Link to="/" className="logo">
          <H1 className="p-0 m-0">LEANGINEERS</H1>
        </Link>
        <nav className="nav w-100">
          <Ul className=" p-0">
            <li className="text-center" onClick={onChange}>
              <StyledLink
                to="/about-us"
                className="link nosotros"
                $darkMode={darkMode}
              >
                {" "}
                <span>Nosotros</span>
              </StyledLink>
            </li>
            <li className="text-center" onClick={onChange}>
              <StyledLink
                to="/solutions"
                className="link soluciones"
                $darkMode={darkMode}
              >
                {" "}
                <span>Soluciones</span>
              </StyledLink>
            </li>
            <li className="text-center" onClick={onChange}>
              <StyledLink
                to="#"
                className="link entrenamiento"
                $darkMode={darkMode}
              >
                {" "}
                <span>Entrenamiento</span>
              </StyledLink>
            </li>
            <li className="text-center" onClick={onChange}>
              <StyledLink to="#" className="link recursos" $darkMode={darkMode}>
                {" "}
                <span>Recursos</span>
              </StyledLink>
            </li>
            {/* <li className="text-center" onClick={onChange}>
                  <StyledLink to="#" className="link blog" $darkMode={darkMode}>
                    {" "}
                    <span>Blog</span>
                  </StyledLink>
                </li> */}
            {/* <li className="text-center" onClick={onChange}>
                  <StyledLink to="#" className="link reconocimientos" $darkMode={darkMode}>
                    {" "}
                    <span>Reconocimientos</span>
                  </StyledLink>
                </li> */}
            <li className="text-center" onClick={onChange}>
              <Contacto to="/contact-us" className="link contacto">
                {" "}
                <span>Contacto</span>
              </Contacto>
            </li>
          </Ul>
        </nav>
      </ContentContainer>
      <Button className="btn-menu" onClick={onShow} $darkMode={darkMode}>
        {mostrarMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        )}
      </Button>
    </>
  );
};

export default Navbar;

//* ALTURA TOTAL DEL NAVBAR CON LA BARRA DE CONTACTO
//* DESKTOP: 4REM + 8 REM, EN MOBILE:  4REM + 0

const ContentContainer = styled.div`
  padding: 12rem 3rem;
  height: 100vh;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  border-bottom: 0.5rem solid
    ${(props) =>
      props.$darkMode
        ? props.theme.dark.secondaryColor
        : props.theme.light.primaryColor};
  background-color: ${(props) =>
    props.$darkMode ? props.theme.dark.primaryDeepColor : props.theme.other.light};
  position: fixed;
  z-index: 500;

  @media (min-width: 768px) {
    padding: 3rem;
    height: 8rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const Ul = styled.ul`
  list-style: none;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 3rem;
  }

  li {
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
    @media (min-width: 768px) {
      margin: 0;
      display: flex;
    }
    .link {
    }
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      font-weight: bold;
    }
  }
`;
const StyledLink = styled(Link)`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.other.blueColor};
  transition: color 0.3s ease;
  &:hover {
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.textColor
        : props.theme.light.primaryColor};
  }
`;

const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  @media (min-width: 768px) {
    text-align: start;
    font-size: 2.5rem;
  }
  @media (min-width: 992px) {
    font-size: 3rem;
  }
`;

const Button = styled.button`
  height: 3rem;
  width: 3rem;
  border: none;
  background-color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.secondaryColor
      : props.theme.light.primaryColor};
  position: fixed;
  padding: 3px;
  top: 5rem;
  right: 2rem;
  z-index: 1000;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Contacto = styled(Link)`
  background-color: #6dc2ce;
  padding: 0.5rem 1.5rem;
  color: white;
  border-radius: 3px;
`;
