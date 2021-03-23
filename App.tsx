import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MakeSound from './components/MakeSound';
import DateTimePicker from './components/DateTimePicker';
import LocalNotification from './components/LocalNortification';


function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.picker} >
        <DateTimePicker />
      </View>
      <LocalNotification />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <View style={styles.stop}>
        <MakeSound />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function Details({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
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
  picker: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
