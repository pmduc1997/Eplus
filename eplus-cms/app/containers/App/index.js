/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import CustomLayout from '../../components/Layout/index'
import {routes} from './constants'
export default function App() {
  return (
    // <div>
    //   <Switch>
    //     <Route exact path="/" component={HomePage} />
    //     <Route component={NotFoundPage} />
    //   </Switch>
    //   <GlobalStyle />
    // </div>
    <CustomLayout>
      <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
    </CustomLayout>
  );
}
