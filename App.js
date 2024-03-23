import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigator from './src/navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#ffff'},
});
