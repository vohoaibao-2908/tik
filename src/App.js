import React, { Component } from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import { homeRouter } from "./Router";
import './App.css';

import "swiper/swiper.scss";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import pageNotFound from "./Pages/PageNotFound";

class App extends Component{
  renderRouter = (router) => {
    if (router && router.length > 0) {
      return router.map((item, index) => {
        return (
          <Route
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {this.renderRouter(homeRouter)}
          <Route path="" component={pageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }

  
}

export default App;
