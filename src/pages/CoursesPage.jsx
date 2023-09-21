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
       <StyledContainer fluid $darkMode={darkMode} className="my-5 py-4" >
        <Container>
          <Row>
            <Col xs={12}>
              <InfoAdicional
                className="aditional--content my-5"
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
            </Col>
          </Row>
        </Container>
      </StyledContainer>
      <Formaciones />
     
      <EstoyInteresado />
    </Layout>
  );
};

export default CoursesPage;

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
const StyledContainer = styled(Container)`
  background-color: ${(props) =>
    props.$darkMode ? props.theme.dark.background : "white"};
  clip-path: polygon(0% 0%, 100% 0, 100% 85%, 51% 100%, 0 85%);
`;
