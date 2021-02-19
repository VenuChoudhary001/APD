import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import LogInPage from "./Components/LogInPage";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* <Route exact path="/login">
          <LogInPage />
        </Route> */}
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

export default App;
