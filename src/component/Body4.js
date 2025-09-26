import { useState , useRef } from "react";

function Body4 () {

    const [text , setText] = useState("");
    const textRef = useRef(); // useRef 함수가 Ref 객체를 생성 -> textRef에 저장

    function alertOnEvent(){
        if(text.length < 5){ // 작성한 text 가 5글자 미만이 참일때
            alert(text + "는 5글자 이하 입니다.");
            textRef.current.focus(); // 작성한 텍스트 유지
        }else{
            alert(text); // 5자 이상일때 알림창 띄움
            setText(""); // 텍스트 초기화
        }
       
    }

    function inputOnChange(e){
        setText(e.target.value);
    }

    return(
        <div>
            <input ref={textRef} value={text} onChange={inputOnChange} />
            <button onClick={alertOnEvent}>작성 완료</button>
        </div>
    );
}

export default Body4;