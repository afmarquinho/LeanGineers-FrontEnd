import styled from "styled-components";
import useDark from "../helpers/useDark";
import Layout from "../layout/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import soldadura from "../assets/soldadura.jpg";
import fabrica from "../assets/fabrica.jpg";
import consultoria from "../assets/consultoria.jpg";
import laboratorio from "../assets/laboratorio.jpg";
import medioambiente from "../assets/medioambiente.jpg";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const BlogPage = () => {
  // TODO: ENCERRAR CADA CARTA EN UN LINK
  const totalArticulos = 31;
  const articulosPorPagina = 10;
  const handlePageChange = (page) => {};

  const { darkMode } = useDark();
  return (
    <Layout>
      <Title $darkMode={darkMode}>Blog</Title>
      <Container className="mx-auto p-0">
        <Row className="m-0 p-0">
          <Col xs={12} lg={8} className="p-0">
            <Card
              className="card d-flex flex-column flex-md-row rounded-4 ovf-hidden p-0"
              $darkMode={darkMode}
            >
              <CaptionContainer
                className="card__caption d-flex flex-column justify-btw"
                $darkMode={darkMode}
              >
                <div className="caption__container">
                  <h3 className="caption__title">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <div className="caption__content text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    blanditiis cupiditate, temporibus excepturi unde beatae hic
                    voluptate in quos esse nostrum dicta! Ipsam ratione, eveniet
                    illo voluptatum odit harum ea.
                  </div>
                </div>
                <div className="d-flex justify-btw align-items-end mt-3">
                  <p>
                    Por: <span>Auto Apellido</span>
                  </p>
                  <StyledLink to="#" $darkMode={darkMode}>
                    Saber Mas
                  </StyledLink>
                </div>
              </CaptionContainer>
              <ImgContainer className="card__img--container ovf-hidden">
                <img
                  src={soldadura}
                  alt="Imagen noticia 1"
                  className="w-100 h-100 obj-fit-cover"
                />
              </ImgContainer>
            </Card>
          </Col>

          <Col xs={12} lg={4} className="p-0">
            <Card
              className="card d-flex flex-column rounded-4 ovf-hidden"
              $darkMode={darkMode}
            >
              <CaptionContainer2
                className="card__caption d-flex flex-column justify-btw"
                $darkMode={darkMode}
              >
                <div className="caption__container">
                  <h3 className="caption__title">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <div className="caption__content text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    blanditiis cupiditate, temporibus excepturi unde beatae hic
                    voluptate in quos esse nostrum dicta! Ipsam ratione, eveniet
                    illo voluptatum odit harum ea.
                  </div>
                </div>
                <div className="d-flex justify-btw align-items-end mt-3">
                  <p>
                    Por: <span>Auto Apellido</span>
                  </p>
                  <StyledLink2 to="#" $darkMode={darkMode}>
                    Saber Mas
                  </StyledLink2>
                </div>
              </CaptionContainer2>
              <ImgContainer className="card__img--container ovf-hidden">
                <img
                  src={medioambiente}
                  alt="Imagen noticia 1"
                  className="w-100 h-100 obj-fit-cover"
                />
              </ImgContainer>
            </Card>
          </Col>

          <Col xs={12} lg={4} className="p-0">
            <Card
              className="card d-flex flex-column rounded-4 ovf-hidden"
              $darkMode={darkMode}
            >
              <CaptionContainer2
                className="card__caption d-flex flex-column justify-btw"
                $darkMode={darkMode}
              >
                <div className="caption__container">
                  <h3 className="caption__title">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <div className="caption__content text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    blanditiis cupiditate, temporibus excepturi unde beatae hic
                    voluptate in quos esse nostrum dicta! Ipsam ratione, eveniet
                    illo voluptatum odit harum ea.
                  </div>
                </div>
                <div className="d-flex justify-btw align-items-end mt-3">
                  <p>
                    Por: <span>Auto Apellido</span>
                  </p>
                  <StyledLink2 to="#" $darkMode={darkMode}>
                    Saber Mas
                  </StyledLink2>
                </div>
              </CaptionContainer2>
              <ImgContainer className="card__img--container ovf-hidden">
                <img
                  src={fabrica}
                  alt="Imagen noticia 1"
                  className="w-100 h-100 obj-fit-cover"
                />
              </ImgContainer>
            </Card>
          </Col>

          <Col xs={12} lg={4} className="p-0">
            <Card
              className="card d-flex flex-column rounded-4 ovf-hidden"
              $darkMode={darkMode}
            >
              <CaptionContainer2
                className="card__caption d-flex flex-column justify-btw"
                $darkMode={darkMode}
              >
                <div className="caption__container">
                  <h3 className="caption__title">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <div className="caption__content text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    blanditiis cupiditate, temporibus excepturi unde beatae hic
                    voluptate in quos esse nostrum dicta! Ipsam ratione, eveniet
                    illo voluptatum odit harum ea.
                  </div>
                </div>
                <div className="d-flex justify-btw align-items-end mt-3">
                  <p>
                    Por: <span>Auto Apellido</span>
                  </p>
                  <StyledLink2 to="#" $darkMode={darkMode}>
                    Saber Mas
                  </StyledLink2>
                </div>
              </CaptionContainer2>
              <ImgContainer className="card__img--container ovf-hidden">
                <img
                  src={consultoria}
                  alt="Imagen noticia 1"
                  className="w-100 h-100 obj-fit-cover"
                />
              </ImgContainer>
            </Card>
          </Col>

          <Col xs={12} lg={4} className="p-0">
            <Card
              className="card d-flex flex-column rounded-4 ovf-hidden"
              $darkMode={darkMode}
            >
              <CaptionContainer2
                className="card__caption d-flex flex-column justify-btw"
                $darkMode={darkMode}
              >
                <div className="caption__container">
                  <h3 className="caption__title">
                    Lorem ipsum dolor sit amet.
                  </h3>
                  <div className="caption__content text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    blanditiis cupiditate, temporibus excepturi unde beatae hic
                    voluptate in quos esse nostrum dicta! Ipsam ratione, eveniet
                    illo voluptatum odit harum ea.
                  </div>
                </div>
                <div className="d-flex justify-btw align-items-end mt-3">
                  <p>
                    Por: <span>Auto Apellido</span>
                  </p>
                  <StyledLink2 to="#" $darkMode={darkMode}>
                    Saber Mas
                  </StyledLink2>
                </div>
              </CaptionContainer2>
              <ImgContainer className="card__img--container ovf-hidden">
                <img
                  src={laboratorio}
                  alt="Imagen noticia 1"
                  className="w-100 h-100 obj-fit-cover"
                />
              </ImgContainer>
            </Card>
          </Col>
        </Row>
      </Container>
      <Pagination
        totalArticulos={totalArticulos}
        articulosPorPagina={articulosPorPagina}
        onPageChange={handlePageChange}
      />
    </Layout>
  );
};

export default BlogPage;

const Title = styled.h2`
  margin: 4rem 0 2rem 0;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.secondaryColor
      : props.theme.light.secondaryColor};

  @media (min-width: 768px) {
    margin-top: 12rem;
  }
`;
const Card = styled.div`
  height: 40rem;
  margin: 1rem;
  background-color: ${(props) =>
    props.$darkMode ? props.theme.dark.background : props.theme.other.light};
  border: 1px solid ${(props) =>
    props.$darkMode ? props.theme.dark.secondaryColor : "#272626f"};
`;
const CaptionContainer = styled.div`
  flex-basis: 60%;
  font-size: 1.4rem;
  padding: 2rem;
  .caption__content {
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.textColor
        : props.theme.light.textColor};
  }
  p {
    font-size: 1.2rem;
    margin-bottom: 0;
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.textColor
        : props.theme.light.textColor};
  }
  h3 {
    font-size: 3rem;
    margin-top: 0;
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.titleColor
        : props.theme.light.titleColor};
  }
`;
const ImgContainer = styled.div`
  flex-basis: 40%;
`;
const CaptionContainer2 = styled(CaptionContainer)`
  h3 {
    font-size: 2rem;
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.titleColor
        : props.theme.light.titleColor};
  }
`;
const StyledLink = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.secondaryColor
      : props.theme.light.secondaryColor};
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  font-weight: bold;
`;
const StyledLink2 = styled(StyledLink)`
  padding: 0.5rem 1rem;
`;
