
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <>
      <Router>
        <Header />
       
        <Switch>
          <Route path="/ELYS">
            <Home/>
          </Route>

          <Route exact path="/pricing">
            <Pricing/>
          </Route>

          <Route exact path="/get-demo">
            <SignupForm/>
          </Route>

        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
