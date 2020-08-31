/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { Home }  from './containers/Home';
import { Day } from './containers/Day';
import { ErrorPage } from './containers/ErrorPage';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';

export function App() {
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Servisenior"
        defaultTitle="Servisenior challenge"
      >
        <meta name="description" content="A simple test" />
      </Helmet>
      
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
        <Route exact path="/internal-error"  component={ErrorPage}/>
        <Route  path={'/:dayOfWeek'} component={Day} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
