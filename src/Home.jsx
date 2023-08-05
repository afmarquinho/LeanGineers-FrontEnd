import Layout from "./layout/Layout";
import foto from "./assets/imagen1.jpg";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <>
      <Layout>
        <ImgContenedor className="img-contenedor m-0 p-0 wdt-100 bg-primary">
          <img src={foto} alt="banner" className=" wdt-100 hgt-100 obj-fit-cover" />
          <div className="texto wdt-100 hgt-100">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </ImgContenedor>
      </Layout>
    </>
  );
};

export default Home;

const ImgContenedor = styled.div`
height: calc(100vh - 4.5rem);
position: relative;
.texto{
  position: absolute;
  top:0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0)0 10%, rgba(0, 0, 0, 0.5) 90%, rgba(0, 0, 0, 0));
  display: flex;
  align-items: center;
  justify-content:center;
  padding: 5rem 30rem;
  p{
    color: white;
    font-size: 5rem;
    border-left: 1.5rem solid white;
    height: 7rem;
    text-align: center;
    margin:0;
    letter-spacing:0.5rem;
    height:auto;
    font-weight:bold;
  }
}
`;

