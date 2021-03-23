import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MakeSound from './components/MakeSound';
import DateTimePicker from './components/DateTimePicker';
import LocalNotification from './components/LocalNortification';

export default function App() {

  return (
    <View style={styles.container}>
      <LocalNotification />
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
