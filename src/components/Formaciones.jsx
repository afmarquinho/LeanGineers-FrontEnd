import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import useDark from "../helpers/useDark";
import { Link } from "react-router-dom";
import {
  InnovacionCurso,
  LiderazgoCurso,
  MejoraCurso,
  TecnologiaCurso,
} from ".";

const Formaciones = () => {
  const { darkMode } = useDark();
  const [innovacion, setInnovacion] = useState(true);
  const [mejora, setMejora] = useState(false);
  const [liderazgo, setLiderazgo] = useState(false);
  const [tecnologia, setTecnologia] = useState(false);

  useEffect(() => {
    setInnovacion(true);
    setMejora(false);
    setLiderazgo(false);
    setTecnologia(false);
  }, []);
  const onInnovacion = () => {
    setInnovacion(true);
    setMejora(false);
    setLiderazgo(false);
    setTecnologia(false);
  };
  const onMejora = () => {
    setInnovacion(false);
    setMejora(true);
    setLiderazgo(false);
    setTecnologia(false);
  };
  const onLiderazgo = () => {
    setInnovacion(false);
    setMejora(false);
    setLiderazgo(true);
    setTecnologia(false);
  };
  const onTecnologia = () => {
    setInnovacion(false);
    setMejora(false);
    setLiderazgo(false);
    setTecnologia(true);
  };
  return (
    <Container className="m-0-auto p-0">
      <Row className="m-0 p-0">
        <Col xs={12} className="m-0 p-0">
          <Title className="text-center text-indigo" $darkMode={darkMode}>
            FORMACIONES
          </Title>
        </Col>
        <StyledCol xs={12} md={2} className="">
          <h4 className="mb-5">Ejes Temáticos</h4>
          <Button
            className={`${innovacion ? "active" : " "}`}
            onClick={onInnovacion}
            $darkMode={darkMode}
          >
            Innovación
          </Button>
          <Button
            className={`${mejora ? "active" : " "}`}
            onClick={onMejora}
            $darkMode={darkMode}
          >
            Mejora Continua
          </Button>
          <Button
            className={`${liderazgo ? "active" : " "}`}
            onClick={onLiderazgo}
            $darkMode={darkMode}
          >
            Liderazgo
          </Button>
          <Button
            className={`${tecnologia ? "active" : " "}`}
            onClick={onTecnologia}
            $darkMode={darkMode}
          >
            Tecnología
          </Button>
        </StyledCol>
        <Col xs={12} md={10} className="">
          {innovacion ? (
            <InnovacionCurso />
          ) : mejora ? (
            <MejoraCurso />
          ) : liderazgo ? (
            <LiderazgoCurso />
          ) : (
            <TecnologiaCurso />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Formaciones;

const Title = styled.h3`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
  text-transform: uppercase;
`;
const StyledCol = styled(Col)`

  .active {
    font-weight: bold;
  }
`;
const Button = styled.button`
  width: 100%;
  height: 4rem;
  text-align: start;
  padding: 0;
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  border: none;
  background-color: transparent;
  transition: all 0.5s ease;
  &:hover {
    font-weight: bold;
  }
`;
