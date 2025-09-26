import {useState} from "react";

function Join() {
    // const [name , setName] = useState(""); 
    // const [gender , setGender] = useState(""); 
    // const [birth , setBirth] = useState(""); 
    // const [bio , setBio] = useState(""); 

        // function onChangeName(e){
    //     setName(e.target.value);
    // }

    // function onChangeGender(e){
    //     setGender(e.target.value);
    // }

    // function onChangeBirth(e){
    //     setBirth(e.target.value);
    // }

    // function onChangeBio(e){
    //     setBio(e.target.value);
    // }

    const [state , setState] = useState({
        name : "",
        gender : "",
        birth : "",
        bio : "",
    });

    function handleOnChange(e){
        setState({
            ...state, // 스프레드로 기존 객체값을 나눠 놓고 한개씩 내용 추가
            [e.target.name] : e.target.value,
    // e 안에 target 안에 있는 name 값 = 위에 선언된 4가지 값이 변할때마다 그 값을 찾아서 주입
        // 추가로 선언 할 필요 없이 적은내용으로 해결
            
        });
    }

    return(
        <div>
            <br /><hr /><br />
            <div>
                <input placeholder="이름" name="name" value={state.name} onChange={handleOnChange} />
            </div>
            <div>
                <select value={state.gender} name="gender" onChange={handleOnChange}>
                    <option key={""}>선택</option>
                    <option key={"남성"}>남성</option>
                    <option key={"여성"}>여성</option>
                </select>
            </div>
            <div>
                <input type="date" value={state.birth} name="birth" onChange={handleOnChange} />
            </div>
            <div>
                <textarea value={state.bio} name="bio" onChange={handleOnChange}/>
            </div>
            <br /><hr /><br />
        </div>
    );
}

export default Join;