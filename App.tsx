import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MakeSound from './components/MakeSound';
import DateTimePicker from './components/DateTimePicker';
import LocalNotification from './components/LocalNortification';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.picker} >
        <DateTimePicker />
      </View>
      <LocalNotification />
      <View style={styles.stop}>
        <MakeSound />
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
  stop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker : {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
