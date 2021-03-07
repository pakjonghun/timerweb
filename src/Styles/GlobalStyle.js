import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

//GlobalStyle = style을 reset 후 다시 설정하는 변수
const GlobalStyle = createGlobalStyle`
${reset};
*{
    box-sizing:border-box;
}



`;

export default GlobalStyle;
