import styled from "styled-components";
import { BannerCourse, EstoyInteresado, NavbarCourse } from "../components";
import Layout from "../layout/Layout";
import backgroundImage from "../assets/imagen5.jpg";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import useDark from "../helpers/useDark";

const CoursePage = () => {
  const { darkMode } = useDark();
  let title = "Nombre del Curso";
  let resume =
    "Resumen: Lorem ipsum dolor sit amet consectetur adipisicing elit dolore voluptas natus asperiores accusamus.";
  let topics = {
    topic1: "topic1",
    topic2: "topic topic topic topic2",
    topic3: "topic topic3",
    topic4: "topic4",
  };

  return (
    <Layout>
      <BannerCourse
        title={title}
        resume={resume}
        topic1={topics.topic1}
        topic2={topics.topic2}
        topic3={topics.topic3}
        topic4={topics.topic4}
        backgroundImage={backgroundImage}
      />
      <Container>
        <Row>
          <Col xs={12} className="m-0 p-0">
            <InfoAdiconal $darkMode={darkMode}>
              <p>
                <span>Duracion:</span> 6 meses
              </p>
              <p>
                <span>Última Actualización: </span> 2023
              </p>
              <p>
                <span>Nivel:</span> Principiante a experto
              </p>
              <p>
                <span>Certificación de Culminación</span>
              </p>
            </InfoAdiconal>
          </Col>
        </Row>
      </Container>
      <NavbarCourse />
      <Container>
        <Row>
          <Col xs={12} className="m-0 p-0">
            <h3 id="acerca">Acerca de este curso</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              aliquid minima architecto dolore voluptas natus asperiores
              accusamus, repellendus rerum distinctio placeat tempore sapiente!
              Ipsa expedita illum autem facere beatae! Perferendis id magnam
              inventore debitis laborum illo necessitatibus, eligendi rerum
              accusantium.
            </p>
            <h3 id="dirigido">A quien va dirigido</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              fugit praesentium voluptatibus doloribus rem earum quasi sunt sed
              iure! Ea!
            </p>
          </Col>
          <Col xs={12} className="m-0 p-0">
            <h3 id="aprenderas">Que aprenderás</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              aliquid minima architecto dolore voluptas natus asperiores
              accusamus, repellendus rerum distinctio placeat tempore sapiente!
              Ipsa expedita illum autem facere beatae! Perferendis id magnam
              inventore debitis laborum illo necessitatibus, eligendi rerum
              accusantium.
            </p>
          </Col>
          <Col xs={12} className="m-0 p-0">
            <h3 id="otros">Otros Cursos</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              aliquid minima architecto dolore voluptas natus asperiores
              accusamus, repellendus rerum distinctio placeat tempore sapiente!
              Ipsa expedita illum autem facere beatae! Perferendis id magnam
              inventore debitis laborum illo necessitatibus, eligendi rerum
              accusantium.
            </p>
          </Col>
        </Row>
      </Container>
      {/* //TODO: QUITAR CERTIFICADO DE CULMINACION HASTA ESTAR EN LA CAPACIDAD DE CERTIFICAR */}

      <EstoyInteresado />
    </Layout>
  );
};

export default CoursePage;
const InfoAdiconal = styled.div`
  display: none;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  top: -20%;
  z-index: 500;
  padding: 3rem 0;
  background-color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.background
      : props.theme.light.secondaryColor};
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  p {
    text-align: center;
    width: calc(100% / 4);
    margin: 0;
    span {
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;
