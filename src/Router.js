import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import {
  MovieDetailPage,
  FavoritesPage,
  SearchPage,
  NotFoundPage
} from './pages';

const Router = () => (
  <Switch>
    <Redirect exact from="/" to="/search" />
    <Route component={SearchPage} exact path="/search" />
    <Route component={MovieDetailPage} exact path="/movie/:id" />
    <Route component={FavoritesPage} exact path="/favorites" />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Router;
