import { useState} from "react";
// 사용자가 인풋요소에 값을 입력할 떄 마다 적절한 메세지 출력

const Chapter03_Input = () => {
    const [text, setText] = useState("");
    const [message, setMessage] = useState("값을 입력해주세요.");

    const inputHandler = (e) => {
        setText(e.earget.value);

        if(e.target.value.length > 10){
            setMessage("메세지가 너무 깁니다.");
        }
    };
    return (
        <>
            <h2>값을 입력 받아보아용</h2>
            <br/>
            <br/>
            <input type="text" onChange={inputHandler} />
            <br/>
            <br/>
            <span>사용자가 입력한 값 : {text}</span>
            <br/>
            <span>안내 메세지 : {message} </span>
            <br/>
            <br/>
            <br/>
        </>
    );
};

export default Chapter03_Input;
