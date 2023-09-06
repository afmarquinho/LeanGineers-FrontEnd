import { styled } from "styled-components";
import useDark from "../helpers/useDark";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

const QuienesSomos = () => {
  const { darkMode } = useDark();
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Titulo className="text-center" $darkMode={darkMode}>
              ¿Quienes Somos?
            </Titulo>
            <ContentContainer className="content-container">
              <Content $darkMode={darkMode}>
                Somos más que una consultoría o plataforma de formaciones; somos
                su socio estratégico en el camino hacia el éxito. Nuestro
                compromiso con la excelencia, la innovación y transferencia de
                conocimiento garantiza que cada cliente alcance sus metas y
                maximice su potencial.
              </Content>
              <StyledLink to="/about-us" $darkMode={darkMode}>
                Conoce nuestro equipo
              </StyledLink>
            </ContentContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default QuienesSomos;
const Titulo = styled.h2`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
`;

const ContentContainer = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 3rem;
  @media (min-width: 768px) {
    padding: 10rem;
  }
`;
const Content = styled.p`
  padding: 3rem;
  background-color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.background
      : props.theme.light.secondaryColor};
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  text-align: justify;
`;
const StyledLink = styled(Link)`
  display: inline-block;
  font-weight: bold;
  padding: 1rem 2rem;
  background-color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.secondaryColor
      : props.theme.other.blueColor};
  color: ${(props) => props.theme.other.light};
`;
