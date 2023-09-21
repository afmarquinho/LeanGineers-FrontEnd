import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import styled from "styled-components";
import useDark from "../helpers/useDark";
import { Link } from "react-router-dom";

const BannerCourse = ({
  title = "",
  resume = "",
  topic1 = "",
  topic2 = "",
  topic3 = "",
  topic4 = "",
  backgroundImage,
}) => {
  const { darkMode } = useDark();
  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="p-0 m-0">
          <ImgBanner $backgroundImage={backgroundImage} $darkMode={darkMode}>
            <Content $darkMode={darkMode}>
              <div className="ruta mb-5">
                <RoutesLink to="/" $darkMode={darkMode}>
                  LeanGineers{" "}
                </RoutesLink>{" "}
                <Span>{" > "}</Span>
                <RoutesLink to="/courses" $darkMode={darkMode}>
                  Cursos
                </RoutesLink>
                <Span>{" > "}</Span>
                <RoutesLink to="#" $darkMode={darkMode}>
                  {title}
                </RoutesLink>
              </div>
              <h2>{title}</h2>
              <p className="resume">{resume}</p>
              <div className="topics">
                <Topic>{topic1}</Topic>
                <Topic>{topic2}</Topic>
                <Topic>{topic3}</Topic>
                <Topic>{topic4}</Topic>
              </div>
              <div className="buttons">
                <Link to="#" className="enrollbtn" $darkMode={darkMode}>
                  Inscribirse Ahora
                </Link>
              </div>
            </Content>
          </ImgBanner>
        </Col>
      </Row>
    </Container>
  );
};

export default BannerCourse;
const ImgBanner = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  background-image: url(${(props) => props.$backgroundImage});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    /* background-color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.primaryColorFaded
        : props.theme.dark.primaryColorFaded}; */
        background-image: linear-gradient(110deg, #0d0114d3,  #0d0114d3);
        @media (min-width: 768px) {
      background-image: linear-gradient(110deg, #0d0114 60% ,  transparent 60% 100%);
      
    }
    position: absolute;
    top: 0;
    right: 0;
    z-index: 400;
  }
`;
const Content = styled.div`
  width: 70%;
  color: white;
  position: absolute;
  z-index: 500;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2 {
    font-size: 4rem;
  }
  .topics {
    display: none;
  }
  .buttons {
    margin-top: 2rem; 
    .enrollbtn {
      background-color: ${(props) =>
        props.$darkMode
          ? props.theme.dark.secondaryColor
          : props.theme.other.light};
      color: black;
      padding: 1rem 4rem;
      font-weight: bold;
      margin-top: 1rem;
      &:hover{
        background-color: ${(props) =>
        props.$darkMode
          ? props.theme.other.light
          : props.theme.other.dark};
          color:${props => props.$darkMode ? props.theme.other.dark : props.theme.other.light};
      }
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    top: 20%;
    transform: translateY(-50%);
    left: 15%;
    transform: translateX(-15%);
    h2 {
      font-size: 8rem;
      margin: 0;
      display: block;
    }
    .resume {
      font-size: 2rem;
    }
    .buttons {
      .enrollbtn {
        padding: 1.5rem 4rem;
      }
    }
    .topics {
      display: block;
    }
  }
`;
const RoutesLink = styled(Link)`
  color: ${(props) => props.theme.other.yellowColor};
  font-weight: bold;
  text-decoration: underline;
`;
const Span = styled.span`
  color: white;
`;
const Topic = styled.span`
  margin: 0.2rem;
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.light.secondaryColor};
  color: ${(props) => props.theme.light.textColor};
  border-radius: 16px;
  font-size: 1.4rem;
`;
