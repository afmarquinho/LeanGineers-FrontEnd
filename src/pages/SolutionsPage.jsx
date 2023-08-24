import styled from "@emotion/styled";
import Layout from "../layout/Layout";

// TODO: PONER UN BOTON DE WAP STATICO

const SolutionsPage = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <IMGBackground className="row background-soluction-img ovf-hidden">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-12"></div>
                <p className="content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Possimus voluptas soluta illum earum reprehenderit excepturi
                  provident exercitationem! Ratione ut reprehenderit, aperiam
                  suscipit maiores ducimus mollitia optio pariatur odit
                  voluptatum unde.
                </p>
              </div>
            </div>
          </div>
        </IMGBackground>
      </div>
    </Layout>
  );
};

export default SolutionsPage;
const IMGBackground = styled.div`
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: #691b9a9d;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
  }
`;
