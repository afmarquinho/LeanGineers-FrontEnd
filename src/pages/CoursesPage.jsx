import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import styled from "styled-components";
import { Banner, EstoyInteresado, Formaciones } from "../components";
import Layout from "../layout/Layout";
import BannerImg from "../assets/laboratorio.jpg";
import useDark from "../helpers/useDark";

const CoursesPage = () => {
  const { darkMode } = useDark();
  return (
    <Layout>
      <Banner
        title={"Formaciones Virtuales"}
        clase={"bg-banner-solutions-img"}
        backgroundImage={BannerImg}
      />
      <Formaciones />

      <StyledContainer fluid $darkMode={darkMode} className="mb-5 pt-5 pb-5">
        <Container>
          <Row>
            <Col xs={12}>
              <InfoAdicional
                className="aditional--content"
                $darkMode={darkMode}
              >
                <h2>¿Por qué elegirnos?</h2>
                <ul>
                  <li>Formacion de vaguardia</li>
                  <li>100% virtual</li>
                  <li>Sesiones en vivo</li>
                  <li>Actualizaciones Permanentes</li>
                  <li>Precios inmejorables</li>
                  <li>Harás parte de nuestra comunidad internacional</li>
                </ul>{" "}
              </InfoAdicional>
            </Col>
          </Row>
        </Container>
      </StyledContainer>
      <EstoyInteresado />
    </Layout>
  );
};

export default CoursesPage;

const InfoAdicional = styled.div`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.dark.textColor};
  h2 {
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.titleColor
        : props.theme.dark.titleColor};
  }
`;
const StyledContainer = styled(Container)`
  background-color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.background
      : props.theme.light.primaryColor};
clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 0);
`;
