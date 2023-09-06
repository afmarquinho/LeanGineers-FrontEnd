import { styled } from "styled-components";
import useDark from "../helpers/useDark";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import consultoria from "../assets/consultoria.jpg";
import virtual from "../assets/virtual.jpg";
import { Link } from "react-router-dom";


const Ofrecemos = () => {
  const { darkMode } = useDark();
  return (
    <StyledContainer className="py-5" fluid $darkMode={darkMode}>
      <Container>
        <Row>
          <Col xs={12}>
            <Titulo className="text-center" $darkMode={darkMode}>
              Nuestro Expertise
            </Titulo>
            <Content $darkMode={darkMode}>
              En <span>LeanGineers</span>, abrimos las puertas a un mundo de
              posibilidades para nuestros clientes, ofreciendo{" "}
              <span>dos pilares fundamentales</span> de excelencia: consultorías
              empresariales y formaciones de vanguardia.
            </Content>
          </Col>

          <Col xs={12} md={6}>
            <Subtitulo>Formaciones Virtuales</Subtitulo>
            <CardContainer>
              <ImgContainer>
                <img src={virtual} alt="Consultorias" />
              </ImgContainer>
              <CardContent $darkMode={darkMode}>
                Cuatro campos esenciales: la innovación continua, la mejora
                continua, el liderazgo empoderado y la tecnología.
              </CardContent>
              <StyledLink to="/solutions" $darkMode={darkMode}>
               SABER MAS
              </StyledLink>
            </CardContainer>
          </Col>
          <Col xs={12} md={6}>
            <Subtitulo>Consultorias Empresariales</Subtitulo>

            <CardContainer>
              <ImgContainer>
                <img src={consultoria} alt="Consultorias" />
              </ImgContainer>
              <CardContent $darkMode={darkMode}>
                Seis ramas especializadas: la innovación, workshops
                transformadores, sistemas de gestión, inteligencia de negocios,
                digitalización de datos y procesos, y estrategia de
                transformación digital.
              </CardContent>
              <StyledLink to="/solutions" $darkMode={darkMode}>
                SABER MAS
              </StyledLink>
            </CardContainer>
          </Col>
        </Row>
      </Container>
    </StyledContainer>
  );
};

export default Ofrecemos;
const Titulo = styled.h2`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
`;
const Content = styled.p`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  text-align: justify;
  span {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.textColor
        : props.theme.other.blueColor};
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
`;
const StyledContainer = styled(Col)`
  background-color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.background
      : props.theme.light.secondaryColor};
`;
const Subtitulo = styled.h3`
  text-align: center;
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.primaryColor};
`;
const CardContainer = styled.div`
  text-align: justify;
  width: 60%;
  margin: 0 auto;
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 20rem;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
const CardContent = styled.p`
 color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
`
const StyledLink = styled(Link)`
  width: 100%;
  margin-bottom: 1rem;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.secondaryColor
      : props.theme.other.blueColor};
  color: ${(props) => props.theme.other.light};
`;
