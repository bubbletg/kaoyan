import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { router } from './router';
import './assets/css/index.css';
import Tabs from './components/Tabs';

function App() {
  let { pathname } = useLocation();
  return (
    <div>
      <Switch>
        {router.map((item, index) => {
          return (
            <Route
              key={index}
              path={item.path}
              exact={item.exact}
              render={props => {
                return item.render(props);
              }}
            ></Route>
          );
        })}
      </Switch>
      <Tabs pathname={pathname}></Tabs>
    </div>
  );
}

export default App;
