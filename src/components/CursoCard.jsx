import styled from "styled-components";

const CursoCard = ({ name ="nombre", content="contenido", darkMode}) => {
  return (
    <Card className="p-3 card__caption">
      <div
        className="p-3 course__name"
        $darkMode={darkMode}
        onClick={(e) => setService(!service)}
      >
        {name}
      </div>
      <div className="course__content">{content}</div>
    </Card>
  );
};

export default CursoCard;
const Card = styled.div`
cursor: pointer;
  .course__content {
    border-top: 1px solid
      ${(props) =>
        props.$darkMode
          ? props.theme.dark.titleColor
          : props.theme.light.titleColor};
    color: ${(props) =>
      props.$darkMode
        ? props.theme.dark.textColor
        : props.theme.light.textColor};
    max-height: ${(props) => (props.$service ? "auto" : "0")};
    opacity: ${(props) => (props.$service ? "1" : "0")};
    transition: all 0.2s ease;
  }
`;
