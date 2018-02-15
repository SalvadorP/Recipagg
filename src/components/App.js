import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import NoMatch from './NoMatch';
import RecipeList from './RecipeList';
import '../css/App.css';
import MenuBar from './MenuBar';
// import * as api from './api';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <MenuBar />
        <br />
        <Switch>
          <Route exact path="/" render={() => (
              <RecipeList />
          )} />
          <Route component={NoMatch} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
