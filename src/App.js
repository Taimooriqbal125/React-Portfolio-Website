// import logo from './logo.svg';
import Header from "./header/Header";
import Sectionone from "./sectionone/Sectionone";
import Sectiontwo from "./sectiontwo/Sectiontwo";
import Sectionthree from "./sectionthree/Sectionthree";
import Sectionfour from "./sectionfour/Sectionfour";
import Footer from "./footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header/>
      <Sectionone />
      <Sectiontwo />
      <Sectionthree/>
      <Sectionfour/>
      <Footer/>
    </div>
  );
}

export default App;
