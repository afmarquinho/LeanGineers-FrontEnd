import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const onShow = () => {
    setMostrarMenu(!mostrarMenu);
  };
  const onChange = () => {
    setMostrarMenu(false);
  };
  return (
    <>
      <GrandContainer className = {`container-fluid p-0 ${mostrarMenu ? "scaled1" : "scaled0"}`}>
        <Row className="row bg-primario m-0-auto">
          <div className="col-auto">
            <div className="logo">
              <H1 className="text-primario p-0 m-0">LEANGINEERS</H1>
            </div>
          </div>
          <div className="col-12 col-md-8 p-0">
            <nav className="nav w-100">
              <Ul className="d-flex p-0">
                <li className="text-center" onClick={onChange}>
                  <Link to="#" className="link nosotros">
                    {" "}
                    <span>Nosotros</span>
                  </Link>
                </li>
                <li className="text-center" onClick={onChange}>
                  <Link to="#" className="link soluciones">
                    {" "}
                    <span>Soluciones</span>
                  </Link>
                </li>
                <li className="text-center" onClick={onChange}>
                  <Link to="#" className="link entrenamiento">
                    {" "}
                    <span>Entrenamiento</span>
                  </Link>
                </li>
                <li className="text-center" onClick={onChange}>
                  <Link to="#" className="link recursos">
                    {" "}
                    <span>Recursos</span>
                  </Link>
                </li>
                {/* <li className="text-center" onClick={onChange}>
                  <Link to="#" className="link blog">
                    {" "}
                    <span>Blog</span>
                  </Link>
                </li> */}
                {/* <li className="text-center" onClick={onChange}>
                  <Link to="#" className="link reconocimientos">
                    {" "}
                    <span>Reconocimientos</span>
                  </Link>
                </li> */}
                <li className="text-center" onClick={onChange}>
                  <Contacto to="#" className="link contacto">
                    {" "}
                    <span>Contacto</span>
                  </Contacto>
                </li>
              </Ul>
            </nav>
          </div>
          
        </Row>
      </GrandContainer>
      <Button className="btn-menu" onClick={onShow}>
            {mostrarMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
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
                stroke="black"
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

const GrandContainer = styled.div`
position: sticky;
top: 0;
z-index:900;  
`;

const Ul = styled.ul`
  list-style: none;
  justify-content: space-between;
  margin: 0;
  width: 100%;
  li {
    transition: all 0.3s ease;
    cursor: pointer;
    @media (max-width: 992px) {
      font-size: 1.4rem;
    }
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    &:hover {
      transform: scale(1.2);
      font-weight: bold;
      .link {
        color: #6a1b9a;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

const H1 = styled.h1`
  font-size: 3rem;
  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Row = styled.div`
  height: 50vh;

  @media (min-width: 768px) {
    max-width: 120rem;
    height: 8rem;
    justify-content: space-between;
    padding: 0 2rem;
  }

  background-color: #e8e8e8; /* Color plata más claro */
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(232, 232, 232, 0.8),
    /* Sombra externa plata */ inset 0 0 10px rgba(255, 255, 255, 0.6),
    /* Sombra interna blanca */ inset 0 0 5px rgba(255, 255, 255, 0.4); /* Sombra interna blanca */

  /* Gradiente para dar sensación de flotar */
  background-image: linear-gradient(45deg, #e8e8e8, #ffffff);

  .col-auto {
    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .col-12 {
    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 70%;
    }
  }
`;

const Button = styled.button`
  height: 3rem;
  width: 3rem;
  border: none;
  background-color: #d4d4d4;
  position: absolute;
  padding: 3px;
  top: 5rem;
  right: 3rem;
  z-index: 1000;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Contacto = styled(Link)`
  background-color: #00bcd4;
  padding: 0.5rem 1.5rem;
  color: white;
  border-radius: 3px;
`;
