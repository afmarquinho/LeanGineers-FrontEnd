import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import styled from "styled-components";
import { Banner, EstoyInteresado, Formaciones } from "../components";
import Layout from "../layout/Layout";
import BannerImg from "../assets/laboratorio.jpg"


const Cursos = () => {
  return (
    <Layout>
        <Banner
        title={"Formaciones Virtuales"}
        clase={"bg-banner-solutions-img"}
        backgroundImage={BannerImg}
      />
      <Formaciones />
      <EstoyInteresado />
    </Layout>
  );
};

export default Cursos;
