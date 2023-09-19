import { styled } from "styled-components";
import useDark from "../helpers/useDark";
import Container from "react-bootstrap/esm/Container";

const Banner = ({
  title = "",
  contenido = "",
  clase = "",
  backgroundImage,
}) => {
  const { darkMode } = useDark();
  return (
    <Container fluid className="p-0">
      <IMGBgBanner
        className={`row ovf-hidden ${clase}`}
        $darkMode={darkMode}
        $backgroundImage={backgroundImage}
      >
        <div className="col-12 p-0">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12">
                <BannerContent
                  className="banner m-0-auto h-100 d-flex-column justify-center align-center"
                  $darkMode={darkMode}
                >
                  <p className="banner__text">{contenido}</p>
                  <Title
                    className="banner__title text-center"
                    $darkMode={darkMode}
                  >
                    {title}
                  </Title>
                </BannerContent>
              </div>
            </div>
          </div>
        </div>
      </IMGBgBanner>
    </Container>
  );
};

export default Banner;

const IMGBgBanner = styled.div`
  position: relative;
  height: calc(100vh - 4rem);
  @media (min-width: 768px) {
    height: calc(100vh - 12rem);
    margin-top: 8rem;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.$backgroundImage});
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 300;
    animation: zoomAnimation 30s infinite alternate;
  }
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.primaryColorFaded
        : props.theme.light.fadedColor};
    position: absolute;
    top: 0;
    right: 0;
    z-index: 400;
  }

  @keyframes zoomAnimation {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.5);
    }
  }
`;

const BannerContent = styled.div`
  width: 90%;
  height: 100%;
  position: relative;
  z-index: 500;

  @media (min-width: 768px) {
    width: 100%;
  }
  .banner__text {
    color: white;
    font-weight: 400;
    font-size: 2rem;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }

    span {
      color: ${(props) =>
    props.$darkMode
      ? props.theme.other.yellowDeepColor
      : props.theme.other.yellowColor};
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 900;
      @media (min-width: 768px) {
        font-size: 3rem;
      }
    }
  }
`;

const Title = styled.h2`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleBannerColor};
  text-transform: uppercase;

  @media (min-width: 768px) {
    letter-spacing: 1rem;
  }
`;
