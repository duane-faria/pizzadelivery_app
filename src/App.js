import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from './navigation';
import { navigationRef } from './navigation/root';
import { store, persistor } from './store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer ref={navigationRef}>
        <Navigator />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);
export default App;
