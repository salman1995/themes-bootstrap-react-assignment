// libs
import React, { useEffect } from "react";
import {
  HashRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// src
import dummyServer from './server/server';
import { Header } from '@components';
import {
  Home,
  Guide,
  CategoryThemes,
  Shop,
  SignIn,
  SignUp,
  Terms
} from '@pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { fetchThemeCategories } from "./actions";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

if(process.env.NODE_ENV !== 'production') {
  dummyServer();
}

function App({
  fetchThemeCategories,
}) {

  useEffect(() => {
    fetchThemeCategories()
  }, [fetchThemeCategories]);
  
  return (
    <HashRouter>
      <Container>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/categories/:category">
            <CategoryThemes />
          </Route>
          <Route path="/guide">
            <Guide />
          </Route>
        </Switch>
        <Redirect to="/home" />
      </Container>
    </HashRouter>
  );
}

export default connect(null, {
  fetchThemeCategories
})(App);
