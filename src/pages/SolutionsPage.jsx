import { styled } from "styled-components";
import Layout from "../layout/Layout";
import chessSVG from "../assets/icons/chess.svg";
import gearSVG from "../assets/icons/gear.svg";
import tacticSVG from "../assets/icons/tactic.svg";
import { Link } from "react-router-dom";
import useDark from "../helpers/useDark";
import BannerImg from "../assets/produccion.jpg";
import { Banner, EstoyInteresado, Formaciones } from "../components";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

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
      <Container>
        <StyledRow className="d-flex justify-content-center justify-content-lg-between">
          <Col xs={12}>
            <Title className="text-center text-indigo" $darkMode={darkMode}>
              CONSULTORÍAS EMPRESARIALES
            </Title>
          </Col>

          <Col xs={11} md={6} lg={4} className="my-3 p-5">
            <Card
              className="p-5 d-flex justify-end align-center"
              $darkMode={darkMode}
            >
              <CardTitle className="text-white text-center">
                Innovación
              </CardTitle>
              <CardCaption
                $darkMode={darkMode}
                className=""
              >
                <p>
                  Servicios, Canales, Marca, Procesos, Estrcutura, Modelos de
                  Beneficio, Sistema de Prodcuto
                </p>

                <Button className="card__btn p-3 font-bold w-100">
                  Saber Más
                </Button>
              </CardCaption>
            </Card>
          </Col>
          <Col xs={11} md={6} lg={4} className="my-3 p-5">
            <Card
              className="p-5 d-flex justify-end align-center"
              $darkMode={darkMode}
            >
              <CardTitle1 className="text-white text-center">
                Workshops
              </CardTitle1>
              <CardCaption
                $darkMode={darkMode}
                className=""
              >
                <p>Enfocados a innovación y mejora continua.</p>
                <Button className="card__btn p-3 font-bold w-100 ">
                  Saber Más
                </Button>
              </CardCaption>
            </Card>
          </Col>
          <Col xs={11} md={6} lg={4} className="my-3 p-5">
            <Card
              className="p-5 d-flex justify-end align-center"
              $darkMode={darkMode}
            >
              <CardTitle2 className="text-white text-center">
                Diseño de Sistemas de Gestión
              </CardTitle2>
              <CardCaption $darkMode={darkMode}>
                <p>
                  NTC 5801 (Innovación), NTC ISO 9001 (Calidad), NTC ISO 27001
                  (Seguridad de la información)
                </p>

                <Button className="card__btn p-3 font-bold w-100">
                  Saber Más
                </Button>
              </CardCaption>
            </Card>
          </Col>
          <Col xs={11} md={6} lg={4} className="my-3 p-5">
            <Card
              className="p-5 d-flex justify-end align-center"
              $darkMode={darkMode}
            >
              <CardTitle3 className="text-white text-center">
                Inteligencia de Negocios
              </CardTitle3>
              <CardCaption $darkMode={darkMode}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, dignissimos!
                </p>

                <Button className="card__btn p-3 font-bold w-100">
                  Saber Más
                </Button>
              </CardCaption>
            </Card>
          </Col>
          <Col xs={11} md={6} lg={4} className="my-3 p-5">
            <Card
              className="p-5 d-flex justify-end align-center"
              $darkMode={darkMode}
            >
              <CardTitle4 className="text-white text-center">
                Digitalización de Datos y Procesos
              </CardTitle4>
              <CardCaption $darkMode={darkMode}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, dignissimos!
                </p>
                <Button className="card__btn p-3 font-bold w-100">
                  Saber Más
                </Button>
              </CardCaption>
            </Card>
          </Col>
          <Col xs={11} md={6} lg={4} className="my-3 p-5">
            <Card
              className="p-5 d-flex justify-end align-center"
              $darkMode={darkMode}
            >
              <CardTitle5 className="text-white text-center">
                Transformación Digital y Tecnologías Avanzadas
              </CardTitle5>
              <CardCaption $darkMode={darkMode}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, dignissimos!
                </p>
                <Button className="card__btn p-3 font-bold w-100">
                  Saber Más
                </Button>
              </CardCaption>
            </Card>
          </Col>
          <Col xs={11} md={6} lg={4} className="my-3 p-5">
            <Card
              className="p-5 d-flex justify-end align-center"
              $darkMode={darkMode}
            >
              <CardTitle6 className="text-white text-center">
                Diseño e Implementación de Modelo Operativo
              </CardTitle6>
              <CardCaption $darkMode={darkMode}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, dignissimos!
                </p>
                <Button className="card__btn p-3 font-bold w-100">
                  Saber Más
                </Button>
              </CardCaption>
            </Card>
          </Col>
        </StyledRow>
      </Container>
      <EstoyInteresado />
    </Layout>
  );
};
// TODO: DEPURAR LOS ESTILOS QUE YA SE BORRARON DE SOLUTION PAGE Y SIMILARES Y CURSOSPAGE

export default SolutionsPage;

const Title = styled.h3`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
  text-transform: uppercase;
`;

// ______________________________________________________________
// ______________________________________________________________
const StyledRow = styled(Row)`
  flex-grow: 1;
  align-items: stretch;
`;

const Card = styled.div`
  position: relative;
  height: 30rem;
  background-color: ${(props) =>
    props.$darkMode ? props.theme.other.dark : "white"};
`;
const CardTitle = styled.h6`
  width: 40%;
  height: 45%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -5%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background-color: rgb(53, 195, 200);
`;
const CardCaption = styled.div`
  width: 60%;
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
`;
const Button = styled.button`
  border: none;
  color: #ffffff;
  background-color: #5050e7;
  position: relative;
  bottom: 0;
  font-size: 1.6rem;
`;
const CardTitle1 = styled(CardTitle)`
  background-color: rgba(13, 110, 253, 1);
`;
const CardTitle2 = styled(CardTitle)`
  background-color: rgba(109, 194, 206, 1);
`;
const CardTitle3 = styled(CardTitle)`
  background-color: #004ef5;
`;
const CardTitle4 = styled(CardTitle)`
  background-color: #00e1ff;
`;
const CardTitle5 = styled(CardTitle)`
  background-color: #004ef5;
`;
const CardTitle6 = styled(CardTitle)`
  background-color: #672bf1;
`;
