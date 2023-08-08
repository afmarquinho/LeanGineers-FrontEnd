import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const [cambiarIcono1, setCambiarIcono1] = useState(false);
  const [cambiarIcono2, setCambiarIcono2] = useState(false);
  const [cambiarIcono3, setCambiarIcono3] = useState(false);
  return (
    <CardContainer className="card-container contenedor p-4 container">
      <div className="row wdt-100 hgt-100 d-flex m-0-auto justify-center aln-center p-3 p-md-5">
        <div
          className="card col-auto p-5"
          onMouseEnter={(e) => setCambiarIcono1(true)}
          onMouseLeave={(e) => setCambiarIcono1(false)}
        >
          <Heding className="heding m-0-auto">
            {cambiarIcono1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="70"
                width="70"
                viewBox="0 -960 960 960"
              >
                <path
                  d="M480-80q-34 0-57.5-23.5T399-161h162q0 34-23.5 57.5T480-80ZM318-223v-60h324v60H318Zm5-121q-66-43-104.5-107.5T180-597q0-122 89-211t211-89q122 0 211 89t89 211q0 81-38 145.5T637-344H323Zm22-60h271q48-32 76-83t28-110q0-99-70.5-169.5T480-837q-99 0-169.5 70.5T240-597q0 59 28 110t77 83Zm135 0Z"
                  fill="yellow"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="70"
                width="70"
                viewBox="0 -960 960 960"
              >
                <path
                  d="M480-80q-34 0-57.5-23.5T399-161h162q0 34-23.5 57.5T480-80ZM318-223v-60h324v60H318Zm5-121q-66-43-104.5-107.5T180-597q0-122 89-211t211-89q122 0 211 89t89 211q0 81-38 145.5T637-344H323Zm22-60h271q48-32 76-83t28-110q0-99-70.5-169.5T480-837q-99 0-169.5 70.5T240-597q0 59 28 110t77 83Zm135 0Z"
                  fill="white"
                />
              </svg>
            )}
          </Heding>
          <BodyCard className="body d-flex-column justify-center aln-center">
            <div className="title">
              <h4 className="text-center m-0-auto p-0">Lorem, ipsum.</h4>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <StyledLink to="#">
              {" "}
              <span>VER MAS</span>
            </StyledLink>
          </BodyCard>
        </div>
        <div
          className="card col-auto p-5"
          onMouseEnter={(e) => setCambiarIcono2(true)}
          onMouseLeave={(e) => setCambiarIcono2(false)}
        >
          <Heding className="heding m-0-auto">
            {cambiarIcono2 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="70"
                width="70"
                viewBox="0 -960 960 960"
              >
                <path
                  d="M474-486q26-32 38.5-66t12.5-79q0-45-12.5-79T474-776q76-17 133.5 23T665-631q0 82-57.5 122T474-486Zm216 326v-94q0-51-26-95t-90-74q173 22 236.5 64T874-254v94H690Zm110-289v-100H700v-60h100v-100h60v100h100v60H860v100h-60Zm-485-32q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM0-160v-94q0-35 18.5-63.5T68-360q72-32 128.5-46T315-420q62 0 118 14t128 46q31 14 50 42.5t19 63.5v94H0Zm315-381q39 0 64.5-25.5T405-631q0-39-25.5-64.5T315-721q-39 0-64.5 25.5T225-631q0 39 25.5 64.5T315-541ZM60-220h510v-34q0-16-8-30t-25-22q-69-32-117-43t-105-11q-57 0-104.5 11T92-306q-15 7-23.5 21.5T60-254v34Zm255-411Zm0 411Z"
                  fill="yellow"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="70"
                width="70"
                viewBox="0 -960 960 960"
              >
                <path
                  d="M474-486q26-32 38.5-66t12.5-79q0-45-12.5-79T474-776q76-17 133.5 23T665-631q0 82-57.5 122T474-486Zm216 326v-94q0-51-26-95t-90-74q173 22 236.5 64T874-254v94H690Zm110-289v-100H700v-60h100v-100h60v100h100v60H860v100h-60Zm-485-32q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM0-160v-94q0-35 18.5-63.5T68-360q72-32 128.5-46T315-420q62 0 118 14t128 46q31 14 50 42.5t19 63.5v94H0Zm315-381q39 0 64.5-25.5T405-631q0-39-25.5-64.5T315-721q-39 0-64.5 25.5T225-631q0 39 25.5 64.5T315-541ZM60-220h510v-34q0-16-8-30t-25-22q-69-32-117-43t-105-11q-57 0-104.5 11T92-306q-15 7-23.5 21.5T60-254v34Zm255-411Zm0 411Z"
                  fill="white"
                />
              </svg>
            )}
          </Heding>

          <BodyCard className="body d-flex-column justify-center aln-center">
            <div className="title">
              <h4 className="text-center m-0-auto p-0">Lorem, ipsum.</h4>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <StyledLink to="#">
              {" "}
              <span>VER MAS</span>
            </StyledLink>
          </BodyCard>
        </div>
        <div
          className="card col-auto p-5"
          onMouseEnter={(e) => setCambiarIcono3(true)}
          onMouseLeave={(e) => setCambiarIcono3(false)}
        >
          <Heding className="heding m-0-auto">
            {cambiarIcono3 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="80"
                width="80"
                viewBox="0 -960 960 960"
              >
                <path
                  d="M226-425q-47-61-71.5-133T130-707q0-32 4-64t12-64l-74 73-28-28 126-126 126 126-28 28-78-77q-8 32-14 65t-6 67q0 69 21.5 133.5T255-454l-29 29Zm420 299q-20 8-42 7t-42-11L295-254l7-26q5-19 19-31t34-14l99-8-117-320q-5-12 .5-22.5T355-691q12-5 23 .5t16 17.5l144 394-128 12 178 83q9 4 19 4t19-3l159-58q39-14 56.5-51.5T845-369l-62-169q-5-12 .5-23t17.5-16q12-5 23 .5t16 17.5l61 169q23 63-4.5 122.5T806-185l-160 59Zm-83-279-58-160q-5-12 .5-22.5T523-603q12-5 22.5.5T561-585l58 160-56 20Zm118-43-44-122q-5-12 .5-23t17.5-16q12-5 22.5.5T693-591l45 123-57 20Zm-4 104Z"
                  fill="yellow"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="70"
                width="70"
                viewBox="0 -960 960 960"
              >
                <path
                  d="M226-425q-47-61-71.5-133T130-707q0-32 4-64t12-64l-74 73-28-28 126-126 126 126-28 28-78-77q-8 32-14 65t-6 67q0 69 21.5 133.5T255-454l-29 29Zm420 299q-20 8-42 7t-42-11L295-254l7-26q5-19 19-31t34-14l99-8-117-320q-5-12 .5-22.5T355-691q12-5 23 .5t16 17.5l144 394-128 12 178 83q9 4 19 4t19-3l159-58q39-14 56.5-51.5T845-369l-62-169q-5-12 .5-23t17.5-16q12-5 23 .5t16 17.5l61 169q23 63-4.5 122.5T806-185l-160 59Zm-83-279-58-160q-5-12 .5-22.5T523-603q12-5 22.5.5T561-585l58 160-56 20Zm118-43-44-122q-5-12 .5-23t17.5-16q12-5 22.5.5T693-591l45 123-57 20Zm-4 104Z"
                  fill="white"
                />
              </svg>
            )}
          </Heding>
          <BodyCard className="body d-flex-column justify-center aln-center">
            <div className="title">
              <h4 className="text-center m-0-auto p-0">Lorem, ipsum.</h4>
            </div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <StyledLink to="#">
              {" "}
              <span>VER MAS</span>
            </StyledLink>
          </BodyCard>
        </div>
      </div>
    </CardContainer>
  );
};

export default Cards;

const CardContainer = styled.div`
  .row {
    gap: 2rem;
    background-color: #6a1b9a;
    border-radius: 10px;
    /* @media (min-width: 768px) {
      position: relative;
      height: auto;
      max-width: 120rem;
      width: 90%;
      top: 55rem;
      transform: translateX(-50%);
      left: 50%;
    } */

    .card {
      background-color: #6a1b9a;
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      border: none;
      position: relative;
      z-index: 1;
      overflow: hidden;
      transition: all 0.5s ease-in-out;
      cursor: pointer;
      ::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: #4ecdc4;
        position: absolute;
        top: 0;
        left: 0;
        transform: scaleY(0);
        z-index: -1;
        transition: all 0.5s ease-in-out;
        transform-origin: bottom;
      }

      &:hover {
        transform: scale(1.06);

        &::after {
          transform: scaleY(1);
        }
        .heding {
          transform: rotateY(360deg);
          color: #000000;
        }
        .body {
          color: #000000;
        }
      }
    }
  }
`;
const BodyCard = styled.div`
  margin-top: 2rem;
  color: white;
  .title {
    h4 {
      font-weight: bold;
      font-size: 1.8rem;
    }
  }
  .content {
    width: 20rem;
    text-align: justify;
  }
`;
const Heding = styled.div`
  transition: transform 0.3s ease-in-out;
  border-radius: 50%;
  border: 5px solid white;
  padding: 1rem;
  margin-bottom: 1rem;

  svg {
    margin: auto;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  background-color: #dff707;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1.2rem;
  width: 100%;
  text-align:center;
  margin-top: 1rem;
`;
