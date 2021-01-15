import React from "react";
import { Route, Switch } from "react-router-dom";

//pages
import Home from "../pages/home/Home";
import Detail from "../pages/detail/Detail";
import Favorite from "../pages/favorite/Favorite";

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorite" exact component={Favorite} />
        <Route path="/detail/:id" exact component={Detail} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
