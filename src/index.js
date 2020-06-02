import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import NavigationContainer from './navigation';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
});
