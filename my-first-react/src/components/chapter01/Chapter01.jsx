import "./Chapter01.css";
import { StyledP, StyledBlueP } from "./Chapter01.styles";



const Chapter01 = () => {

    /*
        함수형 컴포넌트 사용 시 주의할 점

        1. 함수형 컴포넌트에서 return 시 반환할 ReactElement가
        두 개 이상이라면 반드시  하나 이상의 부모요소로 감싸주어야 함

        2. 감쌀태그가 존재하지 않는다면, 빈 태그 <></>로 감싸주거나
        리액트에서 제공해주는 Fragment컴포넌트를 사용해야함
    */
       return (
       <>
            <p style={{color: "yellowgreen", backgroundColor : "black"}}> 스타일 입히는 방법</p>
            <p className="styled-p">스타일 입히는 방법 두 번째</p>
            <StyledP>이거는 스타일드컴포넌트로 스타일 입힘</StyledP>
            <StyledBlueP>이하 동문</StyledBlueP>
       </>
       );
};

export default Chapter01;