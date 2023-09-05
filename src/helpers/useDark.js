import { useContext } from "react";
import DarkContext from "../context/DarkProvider";

const useDark = () => {
  return useContext(DarkContext);
};

export default useDark;
