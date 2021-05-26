import { Component } from "react";
import './App.css';
import HomePage from "./containers/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";


class App extends Component {
  render () {
      return (<>
             <Header/>
             <HomePage/>
             <Footer/>
      </>)
  }
  
}

export default App;
