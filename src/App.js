import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import Login from './views/Login';
import Register from './views/Register';
import Size from './views/Size';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Size />
      </SafeAreaView>
    </>
  );
};

export default App;
