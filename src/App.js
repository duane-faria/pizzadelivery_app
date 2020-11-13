import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store';

import Navigator from './navigation';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  </Provider>
);

export default App;
