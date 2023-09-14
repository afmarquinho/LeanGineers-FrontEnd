import Col from "react-bootstrap/esm/Col";
import styled from "styled-components";
import useDark from "../helpers/useDark";
import { useState } from "react";

const InnovacionCurso = () => {
  const { darkMode } = useDark();

  const [service, setService] = useState(false);
  const [design, setDesign] = useState(false);
  const [forth, setForth] = useState(false);
  const [systematic, setSystematic] = useState(false);
  

  return (
    <Col xs={12} className="my-2 mx-1 p-0">
      <CardContainer className="p-5 bg-lightOrange" $darkMode={darkMode}>
        <CardSubTitle className="p-0 mb-5 mt-0  card__subtitle" $darkMode={darkMode}>
          Innovación
        </CardSubTitle>

        <Card className="p-3">
          <CourseName
            className="p-0 course__name"
            $darkMode={darkMode}
            onClick={(e) => setService(!service)}
          >
            Service Design
          </CourseName>
          <ServiceContent
            className="ps-5 course__content"
            $darkMode={darkMode}
            $service={service}
          >
            <ol>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ol>
          </ServiceContent>
        </Card>

        <Card className="p-3">
          <CourseName
            className="p-0 course__name"
            $darkMode={darkMode}
            onClick={(e) => setDesign(!design)}
          >
            Design Thinking Method Systematic Inventive Thinking
          </CourseName>
          <DesignContent
            className="ps-5 course__content"
            $darkMode={darkMode}
            $design={design}
          >
            <ol>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ol>
          </DesignContent>
        </Card>

        <Card className="p-3">
          <CourseName
            className="p-0 course__name"
            $darkMode={darkMode}
            onClick={(e) => setForth(!forth)}
          >
            Forth Innovation Method
          </CourseName>
          <ForthContent
            className="ps-5 course__content"
            $darkMode={darkMode}
            $forth={forth}
          >
            <ol>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ol>
          </ForthContent>
        </Card>

        <Card className="p-3">
          <CourseName
            className="p-0 course__name"
            $darkMode={darkMode}
            onClick={(e) => setSystematic(!systematic)}
          >
            Systematic Inventive Thinking
          </CourseName>
          <SystematicContent
            className="ps-5 course__content"
            $darkMode={darkMode}
            $systematic={systematic}
          >
            <ol>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
              <li>Lorem, ipsum dolor.</li>
            </ol>
          </SystematicContent>
        </Card>
      </CardContainer>
    </Col>
  );
};

export default InnovacionCurso;

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
const ServiceContent = styled.div`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  display: ${(props) => (props.$service ? "block" : "none")};
`;
const DesignContent = styled(ServiceContent)`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  display: ${(props) => (props.$design ? "block" : "none")};
`;
const ForthContent = styled(ServiceContent)`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  display: ${(props) => (props.$forth ? "block" : "none")};
`;
const SystematicContent = styled(ServiceContent)`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  display: ${(props) => (props.$systematic ? "block" : "none")};
`;