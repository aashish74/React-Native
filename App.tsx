import { StyleSheet, View } from 'react-native';
import React from 'react';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store }  from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style = {{flex:1}}>
        <Navigation />
      </View>  
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;