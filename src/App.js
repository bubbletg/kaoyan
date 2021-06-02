import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { tab_router, router } from './router';
import Tabs from './components/Tabs';

function App() {
  let { pathname } = useLocation();
  let routerList = router.concat(tab_router);
  return (
    <div>
      <Switch>
        {routerList.map((item, index) => {
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
      {tab_router.some(i => i.path === pathname) ? <Tabs></Tabs> : ''}
    </div>
  );
}

export default App;
