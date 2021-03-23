import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MakeSound from './components/MakeSound';
import DateTimePicker from './components/DateTimePicker';
import LocalNotification from './components/LocalNortification';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.clock}>
        <LocalNotification />
      </View>
      <View style={styles.stop}>
        <MakeSound />
      </View>
      <View style={styles.picker} >
        <DateTimePicker />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
  },
  clock: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stop: {
    flex: 1,
    justifyContent: 'center',
  },
  picker : {
    flex: 1,
  }
});
