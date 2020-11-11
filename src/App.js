import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Login from './views/Login';
import Register from './views/Register';
import Size from './views/Size';
import Navigator from './navigation';
const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
