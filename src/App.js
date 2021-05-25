import { Component } from "react";
import './App.css';
import HomePage from "./containers/HomePage";
import Header from "./components/Header";


class App extends Component {
  render () {
      return (<>
             <Header/>
             <HomePage/>
      </>)
  }
  
}

export default App;
