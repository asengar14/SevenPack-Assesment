import { Component } from "react";
import './App.css';
import HomePage from "./containers/HomePage";
import BookMark from "./containers/BookMark";
import News from "./containers/News";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render () {
      return (<Router>
             <Header/>
             <Switch>
                {/* <Route path = "/" component = {<HomePage/>}/> */}
                <Route path="/" exact  ><HomePage/></Route>
                <Route path="/bookmark" exact><BookMark/></Route>
                <Route path="/:url"><News/></Route>
                <Route render={() => <h1>404: page not found</h1>} />
             </Switch>
             <Footer/>
      </Router>)
  }
  
}

export default App;
