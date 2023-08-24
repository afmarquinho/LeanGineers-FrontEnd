import styled from "@emotion/styled";
import Layout from "../layout/Layout";
import chessSVG from "../assets/icons/chess.svg";
import gearSVG from "../assets/icons/gear.svg";
import tacticSVG from "../assets/icons/tactic.svg";

// TODO: PONER UN BOTON DE WAP STATICO

const SolutionsPage = () => {
  return (
    <Layout>
      <div className="container-fluid p-0">
        <IMGBackground className="row background-solution-img ovf-hidden">
          <div className="col-12 p-0">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-12">
                  <BannerContent className="banner m-0-auto h-100 d-flex-column align-center justify-center">
                    <Title className="banner__title">Soluciones</Title>
                  </BannerContent>
                </div>
              </div>
            </div>
          </div>
        </IMGBackground>
      </div>
      {/* //?--------------------> PRIMER BLOQUE <-----------------------------*/}
      <div className="container my-3">
        <div className="row">
          <div className="col-12">
            <div className="content">
              <Title2 className="content__title text-center"> Inovación</Title2>
              <h4 className="content__subtitle text-center">
                Servicios, Canales, Marca, Procesos, Estructura, Modelo de
                Beneficio y Sistema de Producto.
              </h4>
              <Cards className="cards">
                {/* //* PRIMER CARD */}
                <FlipCard className="flip-card">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">ESTRATEGICO</h4>
                    </div>
                    <div className="flip-card-back">
                      <p className="card__text text-justify">
                        Identificar oportunidades de innovación a largo plazo,
                        alineando la innovación con la visión y objetivos de la
                        empresa.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>

                {/* //* SEGUNDO CARD */}
                <FlipCard className="flip-card flip-card-tactic">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">TÁCTICO</h4>
                    </div>
                    <div className="flip-card-back">
                      <p className="card__text text-justify">
                        Desarrollar estrategias específicas de innovación para
                        diferentes áreas, como productos, procesos o canales de
                        distribución.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>

                {/* //* TERCER CARD */}

                <FlipCard className="flip-card flip-card-opetarive">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">OPERATIVO</h4>
                    </div>
                    <div className="flip-card-back">
                      <p className="card__text text-justify w-100">
                        Implementar procesos ágiles de innovación,
                        experimentación y prototipado para crear y lanzar nuevas
                        soluciones innovadoras al mercado.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>
              </Cards>
            </div>
          </div>
        </div>
      </div>

      {/* //?--------------------> SEGUNDO BLOQUE <-----------------------------*/}
      <div className="container py-3">
        <div className="row py-3">
          <div className="col-12">
            <div className="content">
              <Title2 className="content__title text-center"> Workshops</Title2>
              <h4 className="content__subtitle text-center">
                Enfocados a innovación y mejora continua.
              </h4>

              <Cards className="cards">
                {/* //* PRIMER CARD */}
                <FlipCard className="flip-card">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">ESTRATEGICO</h4>
                    </div>
                    <div className="flip-card-back">
                      <p className="card__text text-justify">
                        Nuestros talleres y workshops de innovación y mejora
                        continua están diseñados estratégicamente para catalizar
                        el cambio positivo en su organización. Nos enfocamos en
                        empoderar a su equipo con las habilidades y mentalidad
                        necesarias para generar ideas frescas, desafiar status
                        quo y promover una cultura de constante mejora.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>

                {/* //* SEGUNDO CARD */}
                <FlipCard className="flip-card flip-card-tactic">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">TÁCTICO</h4>
                    </div>
                    <div className="flip-card-back ">
                      <p className="card__text text-justify">
                        Mediante enfoques dinámicos y participativos, nuestros
                        talleres sumergen a los participantes en metodologías
                        probadas de innovación y mejora continua. Facilitamos
                        ejercicios colaborativos, sesiones de lluvia de ideas y
                        análisis de procesos para estimular la creatividad y la
                        identificación de oportunidades de optimización.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>

                {/* //* TERCER CARD */}

                <FlipCard className="flip-card flip-card-opetarive">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">OPERATIVO</h4>
                    </div>
                    <div className="flip-card-back">
                      <p className="card__text text-justify w-100">
                        Durante los talleres, los participantes aprenderán
                        prácticas y técnicas específicas para identificar
                        problemas, generar soluciones innovadoras, y aplicar
                        métodos de mejora continua a través de ejemplos reales.
                        Guiados por nuestros expertos, los equipos colaborarán
                        en la creación de prototipos y planes de acción
                        concretos que puedan implementarse en la organización.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>
              </Cards>
            </div>
          </div>
        </div>
      </div>

      {/* //?--------------------> TERCER BLOQUE <-----------------------------*/}
      <div className="container py-3">
        <div className="row py-3">
          <div className="col-12">
            <div className="content">
              <Title2 className="content__title text-center">
                {" "}
                Diseño de Sistemas de Gestión
              </Title2>
              <h4 className="content__subtitle text-center">
                NTC 5801 (Innovación), NTC ISO 9001 (Calidad), NTC ISO 27001
                (Seguridad de la información)
              </h4>

              <Cards className="cards">
                {/* //* PRIMER CARD */}
                <FlipCard className="flip-card">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">ESTRATEGICO</h4>
                    </div>
                    <div className="flip-card-back">
                      <p className="card__text text-justify">
                        Identificar los sistemas de gestión más adecuados para
                        la empresa en función de sus necesidades y objetivos.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>

                {/* //* SEGUNDO CARD */}
                <FlipCard className="flip-card flip-card-tactic">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">TÁCTICO</h4>
                    </div>
                    <div className="flip-card-back ">
                      <p className="card__text text-justify">
                        Diseñar y documentar los procesos y procedimientos
                        específicos requeridos por los estándares de gestión
                        seleccionados.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>

                {/* //* TERCER CARD */}

                <FlipCard className="flip-card flip-card-opetarive">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">OPERATIVO</h4>
                    </div>
                    <div className="flip-card-back">
                      <p className="card__text text-justify w-100">
                        Implementar, auditar y mantener los sistemas de gestión
                        para garantizar el cumplimiento de los estándares y la
                        mejora continua.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>
              </Cards>
            </div>
          </div>
        </div>
      </div>

      {/* //?--------------------> CUARTO BLOQUE <-----------------------------*/}
      <div className="container py-3">
        <div className="row py-3">
          <div className="col-12">
            <div className="content">
              <Title2 className="content__title text-center">
                {" "}
                Digitalización de Datos y Procesos
              </Title2>
              <h4 className="content__subtitle text-center"></h4>

              <Cards className="cards">
                {/* //* PRIMER CARD */}
                <FlipCard className="flip-card">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">ESTRATEGICO</h4>
                    </div>
                    <div className="flip-card-back">
                      <p className="card__text text-justify">
                        Desarrollar una estrategia de digitalización que alinee
                        la tecnología con los objetivos de negocio y la mejora
                        de procesos.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>

                {/* //* SEGUNDO CARD */}
                <FlipCard className="flip-card flip-card-tactic">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">TÁCTICO</h4>
                    </div>
                    <div className="flip-card-back ">
                      <p className="card__text text-justify">
                        Identificar los sistemas y herramientas tecnológicas
                        adecuados para la digitalización de datos y procesos.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>

                {/* //* TERCER CARD */}

                <FlipCard className="flip-card flip-card-opetarive">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">OPERATIVO</h4>
                    </div>
                    <div className="flip-card-back">
                      <p className="card__text text-justify w-100">
                        Implementar soluciones tecnológicas, capacitación y
                        procesos para lograr una digitalización efectiva y
                        eficiente.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>
              </Cards>
            </div>
          </div>
        </div>
      </div>

      {/* //?--------------------> QUINTO BLOQUE <-----------------------------*/}
      <div className="container py-3">
        <div className="row py-3">
          <div className="col-12">
            <div className="content">
              <Title2 className="content__title text-center">
                {" "}
                Inteligencia de Negocios
              </Title2>
              <h4 className="content__subtitle text-center"></h4>

              <Cards className="cards">
                {/* //* PRIMER CARD */}
                <FlipCard className="flip-card">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">ESTRATEGICO</h4>
                    </div>
                    <div className="flip-card-back">
                      <p className="card__text text-justify">
                        Desarrollar una estrategia de inteligencia de negocios
                        para recopilar, analizar y utilizar datos para la toma
                        de decisiones estratégicas.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>

                {/* //* SEGUNDO CARD */}
                <FlipCard className="flip-card flip-card-tactic">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">TÁCTICO</h4>
                    </div>
                    <div className="flip-card-back ">
                      <p className="card__text text-justify">
                        Definir los KPIs y métricas clave, así como establecer
                        sistemas de reporte y análisis de datos.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>

                {/* //* TERCER CARD */}

                <FlipCard className="flip-card flip-card-opetarive">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">OPERATIVO</h4>
                    </div>
                    <div className="flip-card-back">
                      <p className="card__text text-justify w-100">
                        Implementar herramientas de análisis de datos, generar
                        informes y proporcionar insights para la mejora continua
                        y la toma de decisiones informadas.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>
              </Cards>
            </div>
          </div>
        </div>
      </div>

      {/* //?--------------------> SEXTO BLOQUE <-----------------------------*/}
      <div className="container py-3">
        <div className="row py-3">
          <div className="col-12">
            <div className="content">
              <Title2 className="content__title text-center">
                {" "}
                Estrategia de Transformación Digital y Adopción de Tecnologías
                Avanzadas
              </Title2>
              <h4 className="content__subtitle text-center"></h4>

              <Cards className="cards">
                {/* //* PRIMER CARD */}
                <FlipCard className="flip-card">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">ESTRATEGICO</h4>
                    </div>
                    <div className="flip-card-back">
                      <p className="card__text text-justify">
                        Desarrollar una estrategia integral de transformación
                        digital que integre tecnologías emergentes como minería
                        de datos, minería de procesos, Internet de las Cosas
                        (IoT), Internet Industrial de las Cosas (IIoT) e
                        Industria 4.0.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>

                {/* //* SEGUNDO CARD */}
                <FlipCard className="flip-card flip-card-tactic">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">TÁCTICO</h4>
                    </div>
                    <div className="flip-card-back ">
                      <p className="card__text text-justify">
                        Identificar áreas específicas dentro de la organización
                        que se beneficiarían de la implementación de estas
                        tecnologías y diseñar hojas de ruta para su adopción.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>

                {/* //* TERCER CARD */}

                <FlipCard className="flip-card flip-card-opetarive">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">OPERATIVO</h4>
                    </div>
                    <div className="flip-card-back">
                      <p className="card__text text-justify w-100">
                        Implementar soluciones tecnológicas, como sistemas de
                        análisis de datos, sensores IoT y plataformas IIoT, y
                        supervisar su funcionamiento para optimizar procesos y
                        tomar decisiones basadas en datos.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>
              </Cards>
            </div>
          </div>
        </div>
      </div>

      {/* //?--------------------> SEPTIMO BLOQUE <-----------------------------*/}
      <div className="container py-3">
        <div className="row py-3">
          <div className="col-12">
            <div className="content">
              <Title2 className="content__title text-center">
                {" "}
                Diseño e Implementación de Modelo Operativo
              </Title2>
              <h4 className="content__subtitle text-center"></h4>

              <Cards className="cards">
                {/* //* PRIMER CARD */}
                <FlipCard className="flip-card">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">ESTRATEGICO</h4>
                    </div>
                    <div className="flip-card-back">
                      <p className="card__text text-justify">
                        Nuestro servicio de diseño e implementación de modelo
                        operativo se basa en una visión estratégica que busca
                        alinear sus operaciones con los objetivos y metas de su
                        organización. Trabajamos en estrecha colaboración con
                        usted para comprender sus necesidades y diseñar un
                        modelo operativo eficiente y adaptado a su entorno.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>

                {/* //* SEGUNDO CARD */}
                <FlipCard className="flip-card flip-card-tactic">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">TÁCTICO</h4>
                    </div>
                    <div className="flip-card-back ">
                      <p className="card__text text-justify">
                        A través de análisis detallados y enfoques
                        personalizados, nuestros expertos definen las
                        estructuras, los procesos y los flujos de trabajo
                        óptimos que optimizarán sus operaciones. Facilitamos la
                        identificación de áreas de mejora y la implementación de
                        mejores prácticas que aumenten la eficiencia y la
                        rentabilidad.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>

                {/* //* TERCER CARD */}

                <FlipCard className="flip-card flip-card-opetarive">
                  <FlipCardContainer className="flip-card-container">
                    <div className="flip-card-front d-flex-column justify-center align-center w-100">
                      <Icon className="card__icon w-100">
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </Icon>
                      <h4 className="text-primario">OPERATIVO</h4>
                    </div>
                    <div className="flip-card-back">
                      <p className="card__text text-justify w-100">
                        Una vez definido el diseño del modelo operativo,
                        trabajamos con su equipo para asegurarnos de que la
                        implementación sea fluida y efectiva. Colaboramos en la
                        alineación de recursos, la capacitación del personal y
                        la monitorización del rendimiento para garantizar que el
                        modelo operativo se traduzca en resultados tangibles y
                        mejoras medibles.
                      </p>
                    </div>
                  </FlipCardContainer>
                </FlipCard>
              </Cards>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SolutionsPage;

const Title2 = styled.h3`
  color: #691b9a;
  margin: 1rem 0 0 0.5rem;
  font-size: 2rem;
  @media (min-width: 768px) {
      
      font-size: 3rem;
  };
`;

const IMGBackground = styled.div`
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center -100px;
  position: relative;
  height: calc(50vh);
  @media (min-width: 768px) {
    height: calc(100vh - 12rem);
    margin-top: 8rem;
    /* //? ESTE DIV QUE ES EL FONDO SE PONE MARGEN DE 8 PARA QUE BAJE DEBAJO DE NAV, 
    //? NO ES NECESARIO LA BARRA CONTENT YA TIENE POSICION STATIC, POR ESO SE RESTA 8 DEL 
    //? NAVAR Y NO 12 DEL NAV MAS LA BARRA DE CONTACTO */
  }

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
const BannerContent = styled.div`
  width: 90%;
  height: calc(100vh - 4rem);
  position: relative;
  z-index: 100;
  @media (min-width: 768px) {
    height: calc(100vh - 12rem);
    width: 100%;
  }
`;
const Title = styled.h2`
  color: #00e1ffc5;
  text-transform: uppercase;

  @media (min-width: 768px) {
    letter-spacing: 1rem;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  svg {
    margin: auto;
    width: 50px;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FlipCard = styled.div`
  width: 22rem;
  height: 25rem;
  perspective: 60rem;
  display: inline-block;
  transition: all 0.1s ease;
  @media (min-width: 768px) {
    width: 30rem;
    height: 25rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:hover .flip-card-container {
    transform: rotateY(180deg);
  }
`;
const FlipCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 1s;
  transform-style: preserve-3d;
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  .flip-card-front {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #00bcd4;
  }

  .flip-card-back {
    transform: rotateY(180deg);
    border: 2px solid #00bcd4;
    padding: 0.5rem;
    box-sizing: border-box;
    padding: 1rem;
    padding: 2rem;

    P {
      line-height: 1.4rem;
    }
  }
`;
