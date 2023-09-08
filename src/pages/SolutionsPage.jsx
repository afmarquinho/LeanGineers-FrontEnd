import { styled } from "styled-components";
import Layout from "../layout/Layout";
import chessSVG from "../assets/icons/chess.svg";
import gearSVG from "../assets/icons/gear.svg";
import tacticSVG from "../assets/icons/tactic.svg";
import { Link } from "react-router-dom";
import EstoyInteresado from "../components/EstoyInteresado";
import useDark from "../helpers/useDark";
import Banner from "../components/Banner";
import BannerImg from "../assets/alimentos.jpg";

// TODO: PONER UN BOTON DE WAP STATICO

const SolutionsPage = () => {
  const { darkMode } = useDark();
  return (
    <Layout>
      <Banner
        title={"Soluciones"}
        clase={"bg-banner-solutions-img"}
        backgroundImage={BannerImg}
      />
      <div className="container my-5">
        <div className="row  d-flex justify-center align-center">
          {/* //? -------------------> CARD INNOVACION <--------------------------*/}
          <Title className="text-center text-indigo" $darkMode={darkMode}>
            CONSULTORÍAS EMPRESARIALES
          </Title>
          <div className="col-12 col-md-3 m-3">
            <Card className="card p-4 bg-light-danger d-flex-clumn justify-btw align-center">
              <div className="w-100">
                <h4 className="card__title text-center text-danger">
                  Innovación
                </h4>
                <ul className="card__list text-center m-0 p-0 text-black">
                  <li className="card__item">Servicios</li>
                  <li className="card__item">Canales</li>
                  <li className="card__item">Marca</li>
                  <li className="card__item">Procesos</li>
                  <li className="card__item">Estructura</li>
                  <li className="card__item">Modelos de Beneficos</li>
                  <li className="card__item">Sistema de Producto</li>
                </ul>
                <Recomendado className="card__recomendado">
                  Recomendado
                </Recomendado>
              </div>
              <Button className="card__btn p-3 font-bold w-100 bg-danger text-white">
                Saber Más
              </Button>
            </Card>
          </div>

          {/* //? -------------------> CARD WORKSHOP <--------------------------*/}
          <div className="col-12 col-md-3 m-3">
            <Card className="card p-4 bg-lightBlue d-flex-clumn justify-btw align-center">
              <div className=" w-100">
                <h4 className="card__title text-center text-primary">
                  Workshops
                </h4>
                <ul className="card__list text-center m-0 p-0">
                  <li className="card__item">
                    Enfocados a innovación y mejora continua.
                  </li>
                </ul>
                <Recomendado className="card__recomendado">
                  Recomendado
                </Recomendado>
              </div>
              <Button className="card__btn p-3 font-bold w-100 bg-primary text-white">
                Saber Más
              </Button>
            </Card>
          </div>

          {/* //? -------------------> CARD SG <--------------------------*/}
          <div className="col-12 col-md-3 m-3">
            <Card className="card p-4 bg-lightSuccess d-flex-clumn justify-btw align-center">
              <div className="w-100">
                <h4 className="card__title text-center text-success">
                  Diseño de Sistemas de Gestión
                </h4>
                <ul className="card__list text-center m-0 p-0">
                  <li className="card__item">NTC 5801 (Innovación)</li>
                  <li className="card__item">NTC ISO 9001 (Calidad)</li>
                  <li className="card__item">
                    NTC ISO 27001 (Seguridad de la información)
                  </li>
                </ul>
              </div>
              <Button className="card__btn p-3 font-bold w-100 text-white bg-success">
                Saber Más
              </Button>
            </Card>
          </div>

          {/* //? -------------------> CARD INTELIGENCIA DE NEGOCIOS <--------------------------*/}
          <div className="col-12 col-md-3 m-3">
            <Card className="card p-4 bg-lightPurple d-flex-clumn justify-btw align-center">
              <div className="w-100">
                <h4 className="card__title text-center text-purple">
                  Inteligencia de Negocios
                </h4>
                <ul className="card__list text-center m-0 p-0">
                  <li className="card__item">Lorem ipsum dolor sit.</li>
                  <li className="card__item">
                    Lorem ipsum dolor sit amet consectetur.
                  </li>
                </ul>
                <Recomendado className="card__recomendado">
                  Recomendado
                </Recomendado>
              </div>
              <Button className="card__btn p-3 font-bold w-100 bg-purple text-white">
                Saber Más
              </Button>
            </Card>
          </div>

          {/* //? -------------------> CARD DIGITALIZACION <--------------------------*/}
          <div className="col-12 col-md-3 m-3">
            <Card className="card p-4 bg-lightPink d-flex-clumn justify-btw align-center">
              <div className="w-100">
                <h4 className="card__title text-center text-pink">
                  Digitalización de Datos y Procesos
                </h4>
                <ul className="card__list text-center m-0 p-0">
                  <li className="card__item">Lorem ipsum dolor sit.</li>
                  <li className="card__item">
                    Lorem ipsum dolor sit amet consectetur.
                  </li>
                </ul>
                <Recomendado className="card__recomendado">
                  Recomendado
                </Recomendado>
              </div>
              <Button className="card__btn p-3 font-bold w-100 text-white bg-pink">
                Saber Más
              </Button>
            </Card>
          </div>

          {/* //? -------------------> CARD TRANSFORMACION DIGITAL <--------------------------*/}
          <div className="col-12 col-md-3 m-3">
            <Card className="card p-4 bg-lightOrange d-flex-clumn justify-btw align-center">
              <div className="w-100">
                <h4 className="card__title text-center text-deepOrange">
                  Estrategia de Transformación Digital y Adopción de Tecnologías
                  Avanzadas
                </h4>
                <ul className="card__list text-center m-0 p-0">
                  <li className="card__item">Lorem ipsum dolor sit.</li>
                  <li className="card__item">
                    Lorem ipsum dolor sit amet consectetur.
                  </li>
                </ul>
              </div>
              <Button className="card__btn p-3 font-bold w-100 bg-deepOrange text-white">
                Saber Más
              </Button>
            </Card>
          </div>

          {/* //? -------------------> CARD MODELO OPERATIVO <--------------------------*/}
          <div className="col-12 col-md-3 m-3">
            <Card className="card p-4 bg-lightTeal d-flex-clumn justify-btw align-center">
              <div className="w-100">
                <h4 className="card__title text-center text-teal">
                  Diseño e Implementación de Modelo Operativo
                </h4>
                <ul className="card__list text-center m-0 p-0">
                  <li className="card__item">Lorem ipsum dolor sit.</li>
                  <li className="card__item">
                    Lorem ipsum dolor sit amet consectetur.
                  </li>
                </ul>
                <Recomendado className="card__recomendado">
                  Recomendado
                </Recomendado>
              </div>
              <Button className="card__btn p-3 font-bold w-100 text-white bg-teal">
                Saber Más
              </Button>
            </Card>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <hr />
          <Title className="text-center text-indigo" $darkMode={darkMode}>
            FORMACIONES
          </Title>

          <div className="col-12 col-md-3 my-3">
            <Link to="#">
              <Innovacion className="card rounded-5 ovf-hidden">
                <div className="card__container">
                  <h3 className="card__title text-center">Innovación</h3>
                  <p>Service Design</p>
                  <p>Design Thinking Method Systematic Inventive Thinking</p>
                  <p>Forth Innovation Method</p>
                  <p>Systematic Inventive Thinking</p>
                </div>
                <StyledLink className="text-center campus-link">
                  Ir al campus
                </StyledLink>
              </Innovacion>
            </Link>
          </div>
          <div className="col-12 col-md-3 my-3">
            <Link to="#">
              <Mejora className="card rounded-5 h-100 ovf-hidden ">
                <div className="card__container">
                  <h3 className="card__title text-center">Mejora continua</h3>
                  <p>Lean Management</p>
                  <p>Reingeniería</p>
                  <p>Six Sigma (DMAIC, DMADV)</p>
                  <p>Teoría de Restricciones (TOC)</p>
                </div>
                <StyledLink className="text-center campus-link">
                  Ir al campus
                </StyledLink>
              </Mejora>
            </Link>
          </div>
          <div className="col-12 col-md-3 my-3">
            <Link to="#">
              <Liderazgo className="card rounded-5 h-100 ovf-hidden">
                <div className="card__container">
                  <h3 className="card__title text-center">Liderazgo</h3>

                  <p>Coaching</p>
                  <p>Toyota Kata </p>
                  <p>Gestión del cambio </p>
                  <p>Liderazgo situacional</p>
                </div>
                <StyledLink className="text-center campus-link">
                  Ir al campus
                </StyledLink>
              </Liderazgo>
            </Link>
          </div>
          <div className="col-12 col-md-3 my-3">
            <Link to="#">
              <Tecnologia className="card rounded-5 h-100 ovf-hidden">
                <div className="card__container">
                  <h3 className="card__title text-center">Tecnología</h3>
                  <p>Aprendizaje automático</p>
                  <p> Aprendizaje profundo </p>
                  <p>Big Data </p>
                  <p>Ciencia de datos</p>
                </div>
                <StyledLink className="text-center campus-link">
                  Ir al campus
                </StyledLink>
              </Tecnologia>
            </Link>
          </div>
          <InfoAdicional
            className="col-12 aditional--content my-5"
            $darkMode={darkMode}
          >
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Formacion de vaguardia</li>
              <li>100% virtual</li>
              <li>Sesiones en vivo</li>
              <li>Actualizaciones Permanentes</li>
              <li>Precios inmejorables</li>
              <li>Harás parte de nuestra comunidad internacional</li>
            </ul>{" "}
          </InfoAdicional>
        </div>
      </div>
      <EstoyInteresado />
    </Layout>
  );
};

export default SolutionsPage;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  height: auto;
  font-size: 1.3rem;
  line-height: 2.4rem;
  @media (min-width: 768px) {
    height: 30rem;
    font-size: 1.6rem;
  }
  cursor: pointer;
  :hover {
    transform: scaleY(1.08);
  }
  :hover .card__btn {
    transform: scale(1.01);
    background-color: #ffa600;
  }
  .card__title {
    text-transform: uppercase;
    margin: 1rem 0;
    position: relative;
    z-index: 20;
    font-size: 1.5rem;
    @media (min-width: 992px) {
      font-size: 1.7rem;
    }
  }
`;
const Recomendado = styled.div`
  background-color: #ffeb3b;
  color: black;
  text-align: center;
  position: absolute;
  right: -7rem;
  top: 3rem;
  transform: rotate(45deg);
  font-size: 1rem;
  width: 20rem;
  z-index: 10;
`;
const Button = styled.button`
  border: none;
  color: #212121;
  position: relative;
  bottom: 0;
  font-size: 1.6rem;
`;

const Title = styled.h3`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
  text-transform: uppercase;
`;
const Innovacion = styled.div`
  background-color: #aed581;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  line-height: 2rem;
  .card__container {
    width: 90%;
    text-align: start;
  }
  :hover .campus-link {
    background-color: #311b92;
  }
`;
const Mejora = styled.div`
  background-color: #e1bee7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  line-height: 2rem;
  .card__container {
    width: 90%;
    text-align: start;
  }
  :hover .campus-link {
    background-color: #311b92;
  }
`;
const Liderazgo = styled.div`
  background-color: #fff59d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  line-height: 2rem;
  .card__container {
    width: 90%;
    text-align: start;
  }
  :hover .campus-link {
    background-color: #311b92;
  }
`;
const Tecnologia = styled.div`
  background-color: #ffab91;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  line-height: 2rem;
  .card__container {
    width: 90%;
    text-align: start;
  }
  :hover .campus-link {
    background-color: #311b92;
  }
`;
const StyledLink = styled.p`
  background-color: #536dfe;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
`;
const InfoAdicional = styled.div`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  h4 {
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.titleColor
        : props.theme.light.titleColor};
  }
`;
