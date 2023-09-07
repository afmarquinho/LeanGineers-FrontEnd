import { styled } from "styled-components";
import Layout from "../layout/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import useDark from "../helpers/useDark";

const ContactPage = () => {
  const { darkMode } = useDark();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [alerta, setAlerta] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if ([nombre, email, asunto, mensaje].includes("")) {
      setAlerta("Diligencie todos los campos");

      return;
    }
    setAlerta("");
    //TODO: ENVIAR AL BACKEND
    console.log("pasó la validación");
  };
  return (
    <Layout>
      <>
        <Container className="container p-5;" $darkMode={darkMode}>
          <div className="row ">
            <div className="col-12">
              <Title className="text-center my-5" $darkMode={darkMode}>
                Contáctanos
              </Title>
            </div>
          </div>
          <div className="row m-0 w-100 d-flex justify-center">
            <div className="col-12 col-md-4 col-lg-3 p-5 bg-secundario ">
              <DatosContacto
                className="datos-contacto order-2 order-md-1 h-100 text-white"
                $darkMode={darkMode}
              >
                <div className="correo me-3">
                  <p className="p-0 m-0 font-bold">Correo</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>
                  <span>correo@correo.com</span>
                </div>
                <div className="localizacion my-3">
                  <p className="p-0 m-0 font-bold">Dirección</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span> kra ### calle ###, ciudad, país.</span>
                </div>
                <div className="telefonos my-3">
                  <p className="p-0 m-0 font-bold">Teléfono</p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span>(000)1234567- (000)1234567</span>
                </div>
                <br />
                <p className="font-bold">También encuentranos en:</p>
                <div className="d-flex justify-center align-center">
                  <StyledLink>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="96px"
                      height="96px"
                    >
                      <linearGradient
                        id="awSgIinfw5_FS5MLHI~A9a"
                        x1="6.228"
                        x2="42.077"
                        y1="4.896"
                        y2="43.432"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#0d61a9" />
                        <stop offset="1" stopColor="#16528c" />
                      </linearGradient>
                      <path
                        fill="url(#awSgIinfw5_FS5MLHI~A9a)"
                        d="M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z"
                      />
                      <path
                        d="M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z"
                        opacity=".05"
                      />
                      <path
                        d="M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z"
                        opacity=".07"
                      />
                      <path
                        fill="#fff"
                        d="M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z"
                      />
                    </svg>
                  </StyledLink>
                  <StyledLink>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="96px"
                      height="96px"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path
                        fill="#fff"
                        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                      />
                      <path
                        fill="#fff"
                        d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                      />
                      <path
                        fill="#cfd8dc"
                        d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                      />
                      <path
                        fill="#40c351"
                        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                      />
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </StyledLink>
                  <StyledLink>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="96px"
                      height="96px"
                    >
                      <path
                        fill="#0288D1"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                      />
                      <path
                        fill="#FFF"
                        d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                      />
                    </svg>
                  </StyledLink>
                </div>
              </DatosContacto>
            </div>

            <FormContainer
              className="col-12 col-md-7 col-lg-5 p-5 formulario order-1 order-md-1"
              $darkMode={darkMode}
            >
              <Form action="" onSubmit={onSubmit} className="">
                {alerta && <Alerta>{alerta}</Alerta>}
                <div className="input-group d-flex-column w-100">
                  <Label
                    className="nombre-label"
                    htmlFor="nombre"
                    $darkMode={darkMode}
                  >
                    Nombre
                  </Label>
                  <Input
                    className="nombre-input"
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    $darkMode={darkMode}
                  />
                </div>
                <div className="input-group d-flex-column">
                  <Label className="email-label" htmlFor="email" $darkMode={darkMode}>
                    Correo Electrónico
                  </Label>
                  <Input
                    className="email-input"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    $darkMode={darkMode}
                  />
                </div>
                <div className="input-group d-flex-column">
                  <Label className="asunto-label" htmlFor="asunto" $darkMode={darkMode}>
                    Asunto
                  </Label>
                  <Input
                    className="asunto-input"
                    type="text"
                    name="asunto"
                    id="asunto"
                    value={asunto}
                    onChange={(e) => setAsunto(e.target.value)}
                    $darkMode={darkMode}
                  />
                </div>
                <div className="input-group d-flex-column">
                  <Label className="asunto-label" htmlFor="mensaje" $darkMode={darkMode}>
                    Mensaje
                  </Label>
                  <Textarea
                    className="mensaje-textarea"
                    name="mensaje"
                    id="mensaje"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    $darkMode={darkMode}
                  />
                </div>
                <div className="input-group  my-3">
                  <Label
                    htmlFor="consent"
                    className="consent-label text-justify"
                    $darkMode={darkMode}
                  >
                    <input
                      className="consent-checkbox"
                      type="checkbox"
                      name="consent"
                      id=""
                      value="acepto"
                    />
                    <span className="consent-span">
                      Autorizo a Leangineers para enviarme la información
                      solicitada y registrar los datos que he suministrado de
                      manera libre y voluntaria en su base de datos para fines
                      comerciales, envíos de estados de cuenta, cobranza,
                      transacciones financieras y mercadeo de productos y que
                      serán tratados de acuerdo a lo dispuesto en la Ley
                      colombiana 1581 de 2012 sobre la política de protección de
                      datos. De igual manera hago constar que puedo ejercer los
                      derechos de protección a través del canal{" "}
                      <span className="asterisco">correo@correo.com</span> y
                      ante las entidades de control estatal.
                    </span>
                  </Label>
                </div>
                <Enviar type="submit" value="ENVIAR" $darkMode={darkMode}/>
              </Form>
            </FormContainer>
          </div>
        </Container>
      </>
    </Layout>
  );
};
// TODO: PONER EN ASUNTO UNA LISTA DESPLEGABLE: PREGUNTA, QUEJA, RECLAMO, FELICITACIONES, SUGERENRCIA, OTRO, cambiar correo formulario
// TODO: cambiar correo formulario
// TODO: iNCLUIR EN A VALIACION QUE EL CHECKBOXX ESTE MARCADO

export default ContactPage;
const Container = styled.div`
  margin-top: 3rem;

  @media (min-width: 768px) {
    margin-top: 6.5rem;
  }
`;
const Title = styled.h2`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
`;

const FormContainer = styled.div`
  background-color: ${(props) =>
    props.$darkMode ? props.theme.dark.backbround : props.theme.other.light};
`;
const Form = styled.form`
  width: 100%;
  margin-top: 2rem;

  div .nombre-input,
  div .email-input,
  div .asunto-input,
  div .mensaje-textarea {
    font-size: 1.4rem;
    border: 1px solid #067d8d;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px !important;
    outline: none;
    background-color: #067d8d1f;
    margin-bottom: 0.5rem;
    resize: none;
    width: 100%;
    height: 4rem;
  }

  div .mensaje-textarea {
    height: 12rem;
  }
  div .consent-label {
    font-size: 1.2rem;
    line-height: 1;
    .asterisco {
      color: red;
    }
  }
  div .consent-label .consent-checkbox {
    margin-right: 2rem;
  }
`;
const Label = styled.label`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
`;
const Input = styled.input`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
`;
const Textarea = styled.textarea`
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
`;
const Enviar = styled.input`
  width: 100%;
  background-color: ${props => props.$darkMode ? props.theme.dark.secondaryColor : props.theme.light.secondaryColor};;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px !important;
  border: 1px solid #005f6b;
  color: ${(props) =>
    props.$darkMode ? props.theme.dark.textColor : props.theme.light.textColor};
  font-weight: bold;
  padding: 1rem 3rem;
  margin-top: 1rem;
  transition: all 0.4s ease;
  :hover {
    background-color: #8fe6f1;
  }
`;
const Alerta = styled.p`
  width: 100%;
  margin: 0;
  background-color: red;
  color: white;
  text-align: center;
  font-size: 1.3rem;
`;
const DatosContacto = styled.div`
  margin-top: 2rem;
  p {
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.textColor
        : props.theme.light.textColor};
  }
  span {
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.textColor
        : props.theme.light.textColor};
  }
  div svg {
    height: 20px;
    margin-right: 1rem;
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.textColor
        : props.theme.light.textColor};
  }
`;
const StyledLink = styled(Link)`
  svg {
    width: 30px;
    height: 30px;
  }
`;
