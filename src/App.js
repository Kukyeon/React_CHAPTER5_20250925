import './App.css';
import Body3 from './component/Body3';
// import Body from './component/body';
// import Body2 from './component/Body2';
import Footer from './component/footer';
import Header from "./component/Header";
// import Join from './component/Join';

// function ChildComp(){ // Body 컴포넌트에 전달할 컴포넌트
//   return <div>child component</div>;
// }


function App() {
  // const name = "홍길동";
  // const age = 37;

  // const BodyProps = {
  //   name : "홍길동",
  //   age : 37,
  //   // favorList : ["파스타","빵","떡볶이"]
  // };

  return (
    <div className="App">
        <Header />
        {/*
         <Body {...BodyProps}>
          <ChildComp />
        </Body> 
        */}
        {/* <Body2 /> */}
        {/* <Join /> */}
        <Body3 />
        <Footer />
    </div>
  );
}

export default App;
