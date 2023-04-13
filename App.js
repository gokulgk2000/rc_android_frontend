import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const HelloWorld = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World! dsp</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default HelloWorld;