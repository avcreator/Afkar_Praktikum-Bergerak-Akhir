import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ViewScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AV CREATOR - VIEW COMPONENT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 18,
    color: 'darkblue',
  },
});

export default ViewScreen;
