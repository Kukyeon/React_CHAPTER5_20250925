import {useState} from "react";

function Body2() {

    // Count 
    const [count , setCount] = useState(0); 
    // [state변수, state업데이트함수(set)] = useState(state변수초기값)

    function onIncrease(){
        setCount(count + 1);
        //setCount -> count 값을 변화시키는 함수
        //() 내에 들어온 값(연산된 값)을 count에 다시 저장하는 함수
    }
    // Count 

    // Text
    const [text , setText] = useState("");

    function inputOnChange(e){
        setText(e.target.value);
        //console.log(e.target.value);
        //input에 입력 된 값을 콘솔창에 출력하는 명령문
    }
    // Text
    
    // Date
    const [date , setDate] = useState("");

    function dateOnChange(e){
        console.log(e.target.value);
        setDate(e.target.value);
    }
    // Date

    // Fruit
    const [fruit , setFruit] = useState();

    function fruitOnChange(e){
        console.log(e.target.value);
        setFruit(e.target.value);
    }
    // Fruit

    // TextArea
    const [textarea , setTestarea] = useState();
    const [outputtext , setOutPutText] = useState();
    

    function textareaOnChange(e){
        console.log(e.target.value);
        setTestarea(e.target.value);
        setOutPutText("글 입력중");
        console.log(outputtext);
    }
    // TextArea


    return(
        <div>
            <br /><h1>저는 바디 2 컴포넌트 입니다!</h1><br /><hr /><br />

            {/* Count */}
            <h1>{count}</h1>
            <button onClick={onIncrease}>COUNT++</button>
            <h1>useState에서 받아온 count값</h1><br /><hr /><br />

            {/* Text */}
            <input onChange={inputOnChange} value={text} />
            <div>Input에 입력된 값 text값 : {text}</div><br /><hr /><br />

            {/* Date */}
            <input type="date" value={date} onChange={dateOnChange} />
            <div>Input에 입력된 값 Date값 : {date}</div><br /><hr /><br />

            {/* Fruit */}
            <select value={fruit} onChange={fruitOnChange}>
                <option key={"apple"}>사과</option>
                <option key={"watermelon"}>수박</option>
                <option key={"grape"}>포도</option>
            </select>
            <div>Input에 입력된 값 Fruit값 : {fruit}</div><br /><hr /><br />

            {/* Textarea */}
            <textarea onChange={textareaOnChange} value={textarea} />
            <div>Textarea에 입력된 값 value값 : {textarea} </div>
            <div>{outputtext}</div>
            
        </div>
    );
};

export default Body2;