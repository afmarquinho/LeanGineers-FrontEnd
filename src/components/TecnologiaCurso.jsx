import Col from "react-bootstrap/esm/Col";
import styled from "styled-components";
import useDark from "../helpers/useDark";
import { useState } from "react";

const TecnologiaCurso = () => {
  const { darkMode } = useDark();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <Col xs={12} className="my-2 mx-1 p-0">
      <CardContainer className="p-5 bg-lightBlue " $darkMode={darkMode}>
        <CardSubTitle
          className="p-0 mb-5 mt-0 card__subtitle"
          $darkMode={darkMode}
        >
         Tecnología
        </CardSubTitle>

        <Card className="p-3">
          <CourseName
            className="p-0 course__name"
            $darkMode={darkMode}
            onClick={(e) => setShow1(!show1)}
          >
           Aprendizaje automático
          </CourseName>
          <Content1
            className="ps-5 course__content"
            $darkMode={darkMode}
            $show1={show1}
          >
            <ol>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ol>
          </Content1>
        </Card>

        <Card className="p-3">
          <CourseName
            className="p-0 course__name"
            $darkMode={darkMode}
            onClick={(e) => setShow2(!show2)}
          >
           Aprendizaje profundo
          </CourseName>
          <Content2
            className="ps-5 course__content"
            $darkMode={darkMode}
            $show2={show2}
          >
            <ol>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ol>
          </Content2>
        </Card>

        <Card className="p-3">
          <CourseName
            className="p-0 course__name"
            $darkMode={darkMode}
            onClick={(e) => setShow3(!show3)}
          >
            Big Data
          </CourseName>
          <Content3
            className="ps-5 course__content"
            $darkMode={darkMode}
            $show3={show3}
          >
            <ol>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ol>
          </Content3>
        </Card>

        <Card className="p-3">
          <CourseName
            className="p-0 course__name"
            $darkMode={darkMode}
            onClick={(e) => setShow4(!show4)}
          >
            Ciencia de datos
          </CourseName>
          <Content4
            className="ps-5 course__content"
            $darkMode={darkMode}
            $show4={show4}
          >
            <ol>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ol>
          </Content4>
        </Card>
      </CardContainer>
    </Col>
  );
};

export default TecnologiaCurso;

const CardContainer = styled.div`
  border: 1px solid
    ${(props) => (props.$darkMode ? props.theme.dark.secondaryColor : "gray")};
`;
const Card = styled.div`
  border-top: 1px solid
    ${(props) =>
      props.$darkMode
        ? props.theme.dark.titleColor
        : props.theme.light.titleColor};
`;

const CardSubTitle = styled.h3`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
`;
const CourseName = styled.div`
  font-weight: bold;
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  cursor: pointer;
`;
const Content1 = styled.div`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  display: ${(props) => (props.$show1 ? "block" : "none")};
`;
const Content2 = styled(Content1)`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  display: ${(props) => (props.$show2 ? "block" : "none")};
`;
const Content3 = styled(Content1)`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  display: ${(props) => (props.$show3 ? "block" : "none")};
`;
const Content4 = styled(Content1)`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  display: ${(props) => (props.$show4 ? "block" : "none")};
`;
