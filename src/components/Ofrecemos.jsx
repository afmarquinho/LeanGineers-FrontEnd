import { styled } from "styled-components";
import useDark from "../helpers/useDark";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const Ofrecemos = () => {
  const { darkMode } = useDark();
  return (
    <StyledContainer fluid $darkMode={darkMode}>
      <Container>
        <Row>
          <Col >
            <Titulo className="text-center" $darkMode={darkMode}>
              ¿Que Ofrecemos?
            </Titulo>
            <Content $darkMode={darkMode}>
              En <span>LeanGineers</span>, abrimos las puertas a un mundo de
              posibilidades para nuestros clientes, ofreciendo dos pilares
              fundamentales de excelencia: consultorías empresariales y
              formaciones de vanguardia.
            </Content>
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
