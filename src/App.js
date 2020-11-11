import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Login from './views/Login';
import Register from './views/Register';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Register />
      </SafeAreaView>
    </>
  );
};

export default App;
