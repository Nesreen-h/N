import { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import SecOne from "./components/SecOne";
import SecTow from "./components/SecTwo";
import SecThree from "./components/SecThree";
import SecFour from "./components/SecFour";

class App extends Component {
  render() {
  return (
    <div className="App">
      <Header />
      <Home />
      <SecOne />
      <SecTow />
      <SecThree />
      <SecFour />
    </div>
  );
  }
}
export default App;
