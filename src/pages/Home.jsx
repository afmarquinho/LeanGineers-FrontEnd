import foto from "../assets/imagen1.jpg";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { Cards, Cards2 } from "../components";
import Slider from "../ui/Slider";
import Ofrecemos from "../components/Ofrecemos";
import useDark from "../helpers/useDark";
import QuienesSomos from "../components/QuienesSomos";

const Home = () => {
  const { darkMode } = useDark();
  return (
    <>
      <Layout>
        <>
          <Slider />
          {/* <Cards /> */}

          <Ofrecemos />
          <QuienesSomos />
          <div className="container d-flex justify-arnd align-center my-5">
            <H4 className="m-0" $darkMode={darkMode}>
              Listo para empezar
            </H4>
            <StyledLink
              to="/contactanos"
              className="d-flex justify-center align-center"
            >
              <span>Contáctanos</span>
            </StyledLink>
          </div>
        </>
      </Layout>
    </>
  );
};
// TODO: AGRANDAR LAS FLECHAS DEL SLIDE

export default Home;

const H4 = styled.h4`
  font-weight: bold;
  font-size: 2.5rem;
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
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
