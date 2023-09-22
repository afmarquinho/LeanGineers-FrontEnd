import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import styled from "styled-components";
import useDark from "../helpers/useDark";
import { Link } from "react-router-dom";

const Article = ({
  title = "",
  backgroundImage,
  author = "",
  children,
  date,
}) => {
  const { darkMode } = useDark();
  return (
    <StyledContainer>
      <Row>
        <Col xs={12} md={9}>
          <Title $darkMode={darkMode}>{title}</Title>
          <P $darkMode={darkMode}>Publicado: {date}</P>
        </Col>

        <Col xs={11} md={9} lg={8} className="m-auto text-justify">
          <ImgArticle $backgroundImage={backgroundImage} $darkMode={darkMode}>
            <Text $darkMode={darkMode}>
              <h2>{title}</h2>
              <p>Por: {author}</p>
            </Text>
          </ImgArticle>
          <Content $darkMode={darkMode}>{children}</Content>
        </Col>
        <Col xs={12} lg={2} className="m-0-auto text-justify">
          <OtrosArticulos $darkMode={darkMode}>Artículos recientes</OtrosArticulos>
          <p>
            <StyledLink to="#" $darkMode={darkMode}>Lorem ipsum dolor sit amet.</StyledLink>
          </p>
          <p>
            <StyledLink to="#" $darkMode={darkMode}>Lorem ipsum dolor sit amet consectetur.</StyledLink>
          </p>
          <p>
            <StyledLink to="#" $darkMode={darkMode}>Lorem ipsum dolor sit.</StyledLink>
          </p>
          <p>
            <StyledLink to="#" $darkMode={darkMode}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </StyledLink>
          </p>
          <p>
            <StyledLink to="#"$darkMode={darkMode}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla!
            </StyledLink>
          </p>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Article;

const Title = styled.h3`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
`;
const P = styled.p`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
`;

const StyledContainer = styled(Container)`
  margin-top: 12rem;
`;
const ImgArticle = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url(${(props) => props.$backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }
`;
const Text = styled.div`
  position: relative;
  z-index: 100;
  h2 {
    color: white;
    text-align: center;
  }
  p {
    color: white;
    font-weight: bold;
    text-align: center;
  }
`;
const Content = styled.div`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.textColor
      : props.theme.light.textColor};
`;
const OtrosArticulos = styled.h5`
 color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
`;
const StyledLink = styled(Link)`
 color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.textColor
      : props.theme.light.textColor};
      &:hover{
        color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.secondaryColor
      : props.theme.light.secondaryColor};
      }
`