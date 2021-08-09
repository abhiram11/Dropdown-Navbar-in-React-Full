import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Consulting from "./components/pages/Consulting";
import ContactUs from "./components/pages/ContactUs";
import Home from "./components/pages/Home";
import Marketing from "./components/pages/Marketing";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";

//41:00 list-style ?

function App() {
  return (
    <Router>
      {/* <h1>Yoo</h1> */}
      <Navbar />
      <Switch>
        {/* here we have routes with the components */}
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/marketing" exact component={Marketing} />
        <Route path="/consulting" exact component={Consulting} />
      </Switch>
    </Router>
  );
}

export default App;
