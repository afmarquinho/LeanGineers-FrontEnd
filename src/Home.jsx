import Layout from "./layout/Layout";
import foto from "./assets/imagen1.jpg";
import styled from "@emotion/styled";
import { Cards, Cards2 } from "./components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Layout>
        <>
          <ImgContenedor className="img-contenedor m-0 p-0 wdt-100">
            <img
              src={foto}
              alt="banner"
              className=" wdt-100 hgt-100 obj-fit-cover"
            />
            <div className="texto wdt-100 hgt-100">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </ImgContenedor>
          <Cards />
          <Cards2 />
          <div className="container d-flex justify-arnd align-center my-5">
            <H4 className="m-0">Listo para empezar</H4>
            <StyledLink to="/contactanos" className="d-flex justify-center align-center">
              <span>Contáctanos</span>
            </StyledLink>
          </div>
        </>
      </Layout>
    </>
  );
};

export default Home;

const ImgContenedor = styled.div`
  height: calc(100vh - 4.5rem);
  position: relative;
  .texto {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.7) 30% 70%,
      rgba(0, 0, 0, 0)
    );
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    @media (min-width: 768px) {
      padding: 5rem 30rem;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5) 30% 70%,
        rgba(0, 0, 0, 0)
      );
    }
    p {
      color: white;
      font-size: 2rem;
      border-left: 1.5rem solid white;
      height: 7rem;
      text-align: center;
      margin: 0;
      letter-spacing: 0.5rem;
      height: auto;
      font-weight: bold;
      padding: 1rem;
      @media (min-width: 768px) {
        font-size: 4rem;
      }
    }
  }
`;

const H4 = styled.h4`
  font-weight: bold;
  font-size: 2.5rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;
const StyledLink = styled(Link)`
font-size: 1.7rem;
  @media (min-width: 768px) {
    font-size: 2rem;
    
  }
  background-color: #5050e7;
  font-weight: bold;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
`;
