import styled from "styled-components";
import useDark from "../helpers/useDark";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { useState } from "react";

const NavbarCourse = () => {
  const { darkMode } = useDark();
  const [acerca, setAcerca] = useState(true);
  const [aprenderas, setAprenderas] = useState(false);
  const [otros, setOtros] = useState(false);

  const onAcerca = () => {
    setAcerca(true);
    setAprenderas(false);
    setOtros(false);
  };
  const onAprenderas = () => {
    setAcerca(false);
    setAprenderas(true);
    setOtros(false);
  };
  const onOtros = () => {
    setAcerca(false);
    setAprenderas(false);
    setOtros(true);
  };

  return (
    <Container fluid>
      <StyledRow $darkMode={darkMode}>
        <StyledCol
          xs={12}
          sm={10}
          md={3}
          lg={2}
          className="m-0 px-0 py-2"
          $darkMode={darkMode}
          onClick={onAcerca}
          $acerca={acerca}
        >
          <a href="#acerca">Acerca del Curso</a>
        </StyledCol>
        <StyledCol1
          xs={12}
          sm={10}
          md={3}
          lg={2}
          className="m-0 px-0 py-2"
          $darkMode={darkMode}
          onClick={onAprenderas}
          $aprenderas={aprenderas}
        >
          <a href="#aprenderas"> Que Aprenderás</a>
        </StyledCol1>
        <StyledCol2
          xs={12}
          sm={10}
          md={3}
          lg={2}
          className="m-0 px-0 py-2"
          $darkMode={darkMode}
          onClick={onOtros}
          $otros={otros}
        >
          <a href="#otros">Otros Cursos</a>
        </StyledCol2>
      </StyledRow>
    </Container>
  );
};

export default NavbarCourse;
const StyledRow = styled(Row)`
  padding: 3rem;
  background-color: ${(props) =>
    props.$darkMode ? props.theme.dark.background : "white"};
`;
const StyledCol = styled(Col)`
  cursor: pointer;
  font-weight: ${(props) => (props.$acerca ? "bold" : "normal")};
  a {
    transition: all 0.5s ease;
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.textColor
        : props.theme.light.textColor};
  }
  &:hover {
    font-weight: bold;
  }
`;
const StyledCol1 = styled(StyledCol)`
  font-weight: ${(props) => (props.$aprenderas ? "bold" : "normal")};
`;
const StyledCol2 = styled(StyledCol)`
  font-weight: ${(props) => (props.$otros ? "bold" : "normal")};
`;
