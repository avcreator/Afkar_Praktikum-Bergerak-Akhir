import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const ScrollViewScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Item 1</Text>
      <Text style={styles.text}>Item 2</Text>
      <Text style={styles.text}>Item 3</Text>
      <Text style={styles.text}>Item 4</Text>
      <Text style={styles.text}>Item 5</Text>
      <Text style={styles.text}>Item 6</Text>
      <Text style={styles.text}>Item 7</Text>
      <Text style={styles.text}>Item 8</Text>
      <Text style={styles.text}>Item 9</Text>
      <Text style={styles.text}>Item 10</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default ScrollViewScreen;
