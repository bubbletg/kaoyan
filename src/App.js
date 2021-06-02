import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { router } from './router';
import './assets/css/index.css';
import Tabs from './components/Tabs';

function App() {
  console.log(router);
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
      <Tabs></Tabs>
    </div>
  );
}

export default App;
