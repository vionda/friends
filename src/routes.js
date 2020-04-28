import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./components/about/Presentational";
import Apps from "./components/contacts/Presentational";
import MainPage from "./components/home/Presentational";
import Movies from "./components/movies/index";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/about" component={About} />
      <Route path="/contacts" component={Apps} />
      <Route path="/movies" component={Movies} />
    </Switch>
  );
}
export default Routes;
