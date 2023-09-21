import Col from "react-bootstrap/esm/Col";
import styled from "styled-components";
import useDark from "../helpers/useDark";
import { useState } from "react";
import imagen1 from "../assets/imagen1.jpg";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

const InnovacionCurso = () => {
  const { darkMode } = useDark();

  const [service, setService] = useState(true);
  const [design, setDesign] = useState(false);
  const [forth, setForth] = useState(false);
  const [systematic, setSystematic] = useState(false);

  return (
    <Col xs={12} className="my-2 mx-1 p-0">
      <CardContainer className="p-5" $darkMode={darkMode}>
        <SubTitle
          className="p-0 mb-5 mt-0  card__subtitle"
          $darkMode={darkMode}
        >
          Innovación
        </SubTitle>

        <Row className="">
          <Col xs={11} sm={10} md={6} lg={4} className="m-0-auto my-4">
            <Card className="card" $darkMode={darkMode}>
              <CardImg className="card__img ovf-hidden">
                <img src={imagen1} alt="" className="w-100 h-100" />
              </CardImg>
              <CardCaption className="card__caption d-flex-column p-4">
                <CourseName className="p-0 course__name" $darkMode={darkMode}>
                  Service Design
                </CourseName>
                <CourseContent className="course__content" $darkMode={darkMode}>
                  <p>Lo que aprenderás: lorem, lorem lorem, lorem</p>
                  <div className="botones d-flex justify-content-between w-100">
                    <MasLink className="mas" to="/course/123">
                      Saber mas
                    </MasLink>
                    <Comprar className="comprar">Comprar</Comprar>
                  </div>
                </CourseContent>
              </CardCaption>
            </Card>
          </Col>

          <Col xs={11} sm={10} md={6} lg={4} className="m-0-auto my-4">
            <Card className="card" $darkMode={darkMode}>
              <CardImg className="card__img ovf-hidden">
                <img src={imagen1} alt="" className="w-100 h-100" />
              </CardImg>
              <CardCaption className="card__caption d-flex-column p-4">
                <CourseName className="p-0 course__name" $darkMode={darkMode}>
                  Design Thinking Method Systematic Inventive Thinking
                </CourseName>
                <CourseContent className="course__content" $darkMode={darkMode}>
                  <p>Lo que aprenderás: lorem, lorem lorem, lorem</p>
                  <div className="botones d-flex justify-content-between w-100">
                    <MasLink className="mas" to="/course/123">
                      Saber mas
                    </MasLink>
                    <Comprar className="comprar">Comprar</Comprar>
                  </div>
                </CourseContent>
              </CardCaption>
            </Card>
          </Col>

          <Col xs={11} sm={10} md={6} lg={4} className="m-0-auto my-4">
            <Card className="card" $darkMode={darkMode}>
              <CardImg className="card__img ovf-hidden">
                <img src={imagen1} alt="" className="w-100 h-100" />
              </CardImg>
              <CardCaption className="card__caption d-flex-column p-4">
                <CourseName className="p-0 course__name" $darkMode={darkMode}>
                  Forth Innovation Method
                </CourseName>
                <CourseContent className="course__content" $darkMode={darkMode}>
                  <p>Lo que aprenderás: lorem, lorem lorem, lorem</p>
                  <div className="botones d-flex justify-content-between w-100">
                    <MasLink className="mas" to="/course/123">
                      Saber mas
                    </MasLink>
                    <Comprar className="comprar">Comprar</Comprar>
                  </div>
                </CourseContent>
              </CardCaption>
            </Card>
          </Col>

          <Col xs={11} sm={10} md={6} lg={4} className="m-0-auto my-4">
            <Card className="card" $darkMode={darkMode}>
              <CardImg className="card__img ovf-hidden">
                <img src={imagen1} alt="" className="w-100 h-100" />
              </CardImg>
              <CardCaption className="card__caption d-flex-column p-4">
                <CourseName className="p-0 course__name" $darkMode={darkMode}>
                  Systematic Inventive Thinking
                </CourseName>
                <CourseContent className="course__content" $darkMode={darkMode}>
                  <p>Lo que aprenderás: lorem, lorem lorem, lorem</p>
                  <div className="botones d-flex justify-content-between w-100">
                    <MasLink className="mas" to="/course/123">
                      Saber mas
                    </MasLink>
                    <Comprar className="comprar">Comprar</Comprar>
                  </div>
                </CourseContent>
              </CardCaption>
            </Card>
          </Col>
        </Row>
      </CardContainer>
    </Col>
  );
};

export default InnovacionCurso;

const CardContainer = styled.div`
  border: 1px solid
    ${(props) => (props.$darkMode ? props.theme.dark.secondaryColor : "gray")};
  background-color: ${(props) =>
    props.$darkMode ? props.theme.other.dark : "#c3f1e6"};
`;

const SubTitle = styled.h3`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
`;
const Card = styled.div`
  height: 30rem;
  display: flex;
  flex-direction: column;
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
  background-color: ${(props) =>
    props.$darkMode ? props.theme.dark.background : "white"};
`;
const CardImg = styled.div`
  flex-basis: 40%;
  img {
    object-fit: cover;
    object-position: center;
  }
`;
const CardCaption = styled.div`
  flex-basis: 60%;
`;
const CourseName = styled.div`
  font-weight: bold;
  flex-basis: 20%;
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  cursor: pointer;
  svg {
    margin-left: 4rem;
    width: 20px;
    height: 20px;
    rotate: ${(props) => (props.$service ? "90deg" : "0deg")};
  }
`;
const CourseContent = styled.div`
  flex-basis: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
`;
const MasLink = styled(Link)`
  width: 40%;
  border: none;
  padding: 0.5rem 2rem;
  background-color: #2ecc71;
  color: white;
`;
const Comprar = styled(MasLink)`
  background-color: #5050e7;
`;

const DesignContent = styled(CourseContent)`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
`;
const ForthContent = styled(CourseContent)`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
`;
const SystematicContent = styled(CourseContent)`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
`;
