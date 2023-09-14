import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import styled from "styled-components";
import React, { useState } from "react";
import useDark from "../helpers/useDark";
import { Link } from "react-router-dom";
import { InnovacionCurso, LiderazgoCurso, MejoraCurso, TecnologiaCurso } from ".";

const Formaciones = () => {
  const { darkMode } = useDark();
  
  return (
    <Container className="m-0-auto p-0">
      <Row className="m-0 p-0">
        <Col xs={12} className="m-0 p-0">
          <Title className="text-center text-indigo" $darkMode={darkMode}>
            FORMACIONES
          </Title>
        </Col>
        <InnovacionCurso/>
        <MejoraCurso/>
        <LiderazgoCurso/>
        <TecnologiaCurso/>
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





const Mejora = styled.div`
  background-color: #e1bee7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  line-height: 2rem;
  .card__container {
    width: 90%;
    text-align: start;
  }
  :hover .campus-link {
    background-color: #311b92;
  }
`;
const Liderazgo = styled.div`
  background-color: #fff59d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  line-height: 2rem;
  .card__container {
    width: 90%;
    text-align: start;
  }
  :hover .campus-link {
    background-color: #311b92;
  }
`;
const Tecnologia = styled.div`
  background-color: #ffab91;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  line-height: 2rem;
  .card__container {
    width: 90%;
    text-align: start;
  }
  :hover .campus-link {
    background-color: #311b92;
  }
`;
const StyledLink = styled.p`
  background-color: #536dfe;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
`;
const Innovacion = styled.div`
  background-color: #aed581;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  line-height: 2rem;
  .card__container {
    width: 90%;
    text-align: start;
  }
  :hover .campus-link {
    background-color: #311b92;
  }
`;
