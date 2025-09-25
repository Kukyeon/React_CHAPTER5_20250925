import './App.css';
import Body from './component/body';
import Footer from './component/footer';
import Header from "./component/Header";

function ChildComp(){ // Body 컴포넌트에 전달할 컴포넌트
  return <div>child component</div>;
}


function App() {
  // const name = "홍길동";
  // const age = 37;

  const BodyProps = {
    name : "홍길동",
    age : 37,
    // favorList : ["파스타","빵","떡볶이"]
  };

  return (
    <div className="App">
        <Header />
        <Body {...BodyProps}>
          <ChildComp />
        </Body>
        <Footer />
    </div>
  );
}

export default App;
