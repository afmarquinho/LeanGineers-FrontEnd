import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <Row className="row bg-primario m-0-auto">
          <div className="col-auto">
            <div className="logo">
              <H1 className="text-primario p-0 m-0">LEANGINEERS</H1>
            </div>
          </div>
          <div className="col-12 col-md-8 p-0">
            <nav className="nav">
              <Ul className="d-flex p-0">
                <div>
                  <Link to="#" className="nosotros">
                    {" "}
                    <span>Nosotros</span>
                  </Link>
                </div>
                <div>
                  <Link to="#" className="soluciones">
                    {" "}
                    <span>Soluciones</span>
                  </Link>
                </div>
                <div>
                  <Link to="#" className="entrenamiento">
                    {" "}
                    <span>Entrenamiento</span>
                  </Link>
                </div>
                <div>
                  <Link to="#" className="recuersos">
                    {" "}
                    <span>Recuersos</span>
                  </Link>
                </div>
                <div>
                  <Link to="#" className="blog">
                    {" "}
                    <span>Blog</span>
                  </Link>
                </div>
                <div>
                  <Link to="#" className="reconocimientos">
                    {" "}
                    <span>Reconocimientos</span>
                  </Link>
                </div>
                <>
                  <Link to="#" className="contacto">
                    {" "}
                    <span>Contacto</span>
                  </Link>
                </>
              </Ul>
            </nav>
          </div>
          <Button className="btn-menu">
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
          </Button>
        </Row>
      </div>
    </>
  );
};

export default Navbar;
const Ul = styled.div`
  list-style: none;
  margin: 0 auto;
  justify-content: space-between;
  @media (max-width: 768px) {
      flex-direction: column;
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
  max-width: 120rem;
  height: 8rem;
  @media (max-width: 768px) {
    height: 50vh;
  }
  background-color: #e8e8e8; /* Color plata más claro */
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(232, 232, 232, 0.8),
    /* Sombra externa plata */ inset 0 0 10px rgba(255, 255, 255, 0.6),
    /* Sombra interna blanca */ inset 0 0 5px rgba(255, 255, 255, 0.4); /* Sombra interna blanca */

  /* Gradiente para dar sensación de flotar */
  background-image: linear-gradient(45deg, #e8e8e8, #ffffff);
  position: relative;
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
  top: 2rem;
  right: 2rem;
  @media (min-width: 768px) {
    display: none;
  }
`;
