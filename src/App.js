import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';

import Navigator from './navigation';
import { navigationRef } from './navigation/root';
import { getUser } from './util/authStorage';

const App = () => {
  let logged = getUser();
  console.log(logged);
  if (!logged.token) {
    logged = false;
  }
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Navigator logged={logged} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
