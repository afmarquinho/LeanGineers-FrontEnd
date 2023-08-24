import styled from "@emotion/styled";
import Layout from "../layout/Layout";
import chessSVG from "../assets/icons/chess.svg";
import gearSVG from "../assets/icons/gear.svg";
import tacticSVG from "../assets/icons/tactic.svg";

// TODO: PONER UN BOTON DE WAP STATICO

const SolutionsPage = () => {
  return (
    <Layout>
      <div className="container-fluid p-0">
        <IMGBackground className="row background-solution-img ovf-hidden">
          <div className="col-12 p-0">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-12">
                  <BannerContent className="banner m-0-auto h-100 d-flex-column align-center justify-center">
                    <Title className="banner__title">Soluciones</Title>
                  </BannerContent>
                </div>
              </div>
            </div>
          </div>
        </IMGBackground>
      </div>
      <div className="container my-5">
        <div className="row  d-flex justify-center align-center">
          {/* //? -------------------> CARD INNOVACION <--------------------------*/}
          <div className="col-12 col-md-3 m-3">
            <Card className="card p-4 bg-card text-white d-flex-clumn justify-btw align-center">
              <div className=" w-100">
                <h4 className="card__title text-center">Innovación</h4>
                <ul className="card__list text-center m-0 p-0">
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
              <Button className="card__btn p-3 font-bold w-100">
                Saber Más
              </Button>
            </Card>
          </div>

          {/* //? -------------------> CARD WORKSHOP <--------------------------*/}
          <div className="col-12 col-md-3 m-3">
            <Card className="card p-4 bg-card text-white d-flex-clumn justify-btw align-center">
              <div className=" w-100">
                <h4 className="card__title text-center">Workshops</h4>
                <ul className="card__list text-center m-0 p-0">
                  <li className="card__item">
                    Enfocados a innovación y mejora continua.
                  </li>
                </ul>
                <Recomendado className="card__recomendado">
                  Recomendado
                </Recomendado>
              </div>
              <Button className="card__btn p-3 font-bold w-100">
                Saber Más
              </Button>
            </Card>
          </div>

          {/* //? -------------------> CARD SG <--------------------------*/}
          <div className="col-12 col-md-3 m-3">
            <Card className="card p-4 bg-card text-white d-flex-clumn justify-btw align-center">
              <div className="w-100">
                <h4 className="card__title text-center">
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
              <Button className="card__btn p-3 font-bold w-100">
                Saber Más
              </Button>
            </Card>
          </div>

          {/* //? -------------------> CARD DIGITALIZACION <--------------------------*/}
          <div className="col-12 col-md-3 m-3">
            <Card className="card p-4 bg-card text-white d-flex-clumn justify-btw align-center">
              <div className="w-100">
                <h4 className="card__title text-center">
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
              <Button className="card__btn p-3 font-bold w-100">
                Saber Más
              </Button>
            </Card>
          </div>

          {/* //? -------------------> CARD INTELIGENCIA DE NEGOCIOS <--------------------------*/}
          <div className="col-12 col-md-3 m-3">
            <Card className="card p-4 bg-card text-white d-flex-clumn justify-btw align-center">
              <div className="w-100">
                <h4 className="card__title text-center">
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
              <Button className="card__btn p-3 font-bold w-100">
                Saber Más
              </Button>
            </Card>
          </div>

          {/* //? -------------------> CARD TRANSFORMACION DIGITAL <--------------------------*/}
          <div className="col-12 col-md-3 m-3">
            <Card className="card p-4 bg-card text-white d-flex-clumn justify-btw align-center">
              <div className="w-100">
                <h4 className="card__title text-center">
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
              <Button className="card__btn p-3 font-bold w-100">
                Saber Más
              </Button>
            </Card>
          </div>

          {/* //? -------------------> CARD MODELO OPERATIVO <--------------------------*/}
          <div className="col-12 col-md-3 m-3">
            <Card className="card p-4 bg-card text-white d-flex-clumn justify-btw align-center">
              <div className="w-100">
                <h4 className="card__title text-center">
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
              <Button className="card__btn p-3 font-bold w-100">
                Saber Más
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SolutionsPage;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2);
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
    color: black;
    font-size: 1.5rem;
    @media (min-width: 992px) {
      font-size: 1.7rem;
    }
  }
`;
const Recomendado = styled.div`
  background-color: yellow;
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
  background-color: #ffc107;
  color: #212121;
  position: relative;
  bottom: 0;
  font-size: 1.6rem;
`;
const IMGBackground = styled.div`
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center -100px;
  position: relative;
  height: calc(50vh);
  @media (min-width: 768px) {
    height: calc(100vh - 12rem);
    margin-top: 8rem;
    /* //? ESTE DIV QUE ES EL FONDO SE PONE MARGEN DE 8 PARA QUE BAJE DEBAJO DE NAV, 
    //? NO ES NECESARIO LA BARRA CONTENT YA TIENE POSICION STATIC, POR ESO SE RESTA 8 DEL 
    //? NAVAR Y NO 12 DEL NAV MAS LA BARRA DE CONTACTO */
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #691b9a9d;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  }
`;
const BannerContent = styled.div`
  width: 90%;
  height: calc(100vh - 4rem);
  position: relative;
  z-index: 100;
  @media (min-width: 768px) {
    height: calc(100vh - 12rem);
    width: 100%;
  }
`;
const Title = styled.h2`
  color: #00e1ff;
  text-transform: uppercase;

  @media (min-width: 768px) {
    letter-spacing: 1rem;
  }
`;
