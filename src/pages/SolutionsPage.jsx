import { styled } from "styled-components";
import Layout from "../layout/Layout";
import useDark from "../helpers/useDark";
import BannerImg from "../assets/produccion.jpg";
import { Banner, CardConsultancy, EstoyInteresado } from "../components";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { consultancyArray } from "../../dataBase/consultancies";

// TODO: PONER UN BOTON DE WAP STATICO

const SolutionsPage = () => {
  const { darkMode } = useDark();
  return (
    <Layout>
      <Banner
        title={"Consultorías"}
        clase={"bg-banner-solutions-img"}
        backgroundImage={BannerImg}
      />
      <Container>
        <StyledRow className="d-flex justify-content-center justify-content-lg-between">
          <Col xs={12}>
            <Title className="text-center text-indigo" $darkMode={darkMode}>
              CONSULTORÍAS EMPRESARIALES
            </Title>
          </Col>

          {consultancyArray.map((consultancy) => (
            <CardConsultancy
              acronym={consultancy.acronym}
              name={consultancy.name}
              content={consultancy.content}
              key={consultancy.id}
            />
          ))}
        </StyledRow>
      </Container>
      <EstoyInteresado />
    </Layout>
  );
};
// TODO: DEPURAR LOS ESTILOS QUE YA SE BORRARON DE SOLUTION PAGE Y SIMILARES Y CURSOSPAGE

export default SolutionsPage;

const Title = styled.h3`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
  text-transform: uppercase;
`;

const StyledRow = styled(Row)`
  flex-grow: 1;
  align-items: stretch;
`;

