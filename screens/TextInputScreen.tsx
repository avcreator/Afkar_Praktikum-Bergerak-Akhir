import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextInputScreen = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ketik disini!"
        value={text}
        onChangeText={setText}
      />
      <Text style={styles.text}>Kamu mengetik: {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
  },
  text: {
    fontSize: 18,
  },
});

export default TextInputScreen;
