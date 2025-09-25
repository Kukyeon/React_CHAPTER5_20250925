import './App.css';
import Body from './component/body';
import Footer from './component/footer';
import Header from "./component/Header";

function App() {
  const name = "홍길동";
  const age = 37;

  return (
    <div className="App">
        <Header />
        <Body name = {name} age = {age}/>
        <Footer />
    </div>
  );
}

export default App;
