import Col from "react-bootstrap/esm/Col";
import styled from "styled-components";
import useDark from "../helpers/useDark";
import { courses } from "../../dataBase/courses";
import CardCourse from "./CardCourse";

const MejoraCurso = () => {
  const { darkMode } = useDark();
  let filteredCourses = courses.filter((course) => {
    return course.type === "mejora";
  });

  return (
    <>
        
          <Title className="p-0 mb-5 mt-0 card__subtitle" $darkMode={darkMode}>
            Mejora Continua
          </Title>
    
     
      {filteredCourses.map((course) => (
        <CardCourse
          name={course.name}
          resume={course.resume}
          tutor={course.tutor}
          oldPrice={course.oldPrice}
          price={course.price}
          key={course.id}
        />
      ))}
    </>
  );
};

export default MejoraCurso;

const Title = styled.h3`
  color: ${(props) =>
    props.$darkMode
      ? props.theme.dark.titleColor
      : props.theme.light.titleColor};
`;
