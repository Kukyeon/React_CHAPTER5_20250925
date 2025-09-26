import { useState } from "react";

function Viewer({number}){ //Body3 컴포넌트의 하위 컴포넌트 -> props 전달 -> props = state
    return(
        <div>
            {number % 2 === 0 ? <h1>짝수</h1> : <h1>홀수</h1>}
        </div>
    );
}

function Viewer2(){ 
    console.log("뷰어2 컴포넌트 업데이트");
    return(
        <div>
            <hr /><br />
            Viewer2 컴포넌트 입니다@_!
            <br /><hr />
        </div>
    );
}

function Body3 () {

    const [number , setNumber] = useState(0);

    function plus(){
        setNumber(number + 1);
    }
    function minus(){
        setNumber(number - 1);
    }

    return(
        <div>
            <h1>{number}</h1>
            <Viewer number={number} />
            <Viewer2 />
            <div>
                <button onClick={plus}>증가</button>
                <button onClick={minus}>감소</button>
            </div>
        </div>
    );
}

export default Body3;