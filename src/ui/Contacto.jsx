import { styled } from "styled-components";
import { Link } from "react-router-dom";
import useDark from "../helpers/useDark";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contacto = () => {
  const { darkMode } = useDark();
  return (
    <div className="contacto p-0 m-0">
      <Container fluid className="m-0 p-0">
        <Row className="m-0 p-0">
          <Col className="m-0 p-0">
            <Content
              className="d-flex justify-end align-center px-4"
              $darkMode={darkMode}
            >
              <div className="correo">
                <Link className="text-white">correo@correo.com</Link>
              </div>
              <div className="telefono text-white">
                <Link className="text-white">(000)1234567</Link>
              </div>
            </Content>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacto;

const Content = styled.div`
  height: 4rem;
  border-bottom: 0.5rem solid
    ${(props) =>
      props.$darkMode
        ? props.theme.dark.secondaryColor
        : props.theme.light.secondaryColor};

  background-color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.secondaryColor
      : props.theme.light.primaryColor};
  .correo {
    border-right: 1px solid white;
    padding: 0 2rem;
    &:hover {
      background-color: #540772;
    }
  }
  .telefono {
    border-left: 1px solid white;
    padding: 0 2rem;
    &:hover {
      background-color: #540772;
    }
  }
`;
