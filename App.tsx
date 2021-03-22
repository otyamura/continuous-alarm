import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MakeSound from './components/MakeSound';
import DateTimePicker from './components/DateTimePicker';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>こんにちは!</Text>
      <MakeSound />
      <DateTimePicker />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
