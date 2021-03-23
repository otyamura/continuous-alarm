import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MakeSound from './components/MakeSound';
import DateTimePicker from './components/DateTimePicker';
import LocalNotification from './components/LocalNortification';
import SelectDayOfTheWeek from './components/SelectDayOfTheWeek';


function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ThemeProvider useDark={true}>
        <View style={styles.picker} >
          <DateTimePicker />
        </View>
        <Button
          type='outline'
          title="Go to day option"
          onPress={() => navigation.navigate('Details')}
        />
        <View style={styles.stop}>
          <MakeSound />
        </View>
        <StatusBar style="auto" />
        <LocalNotification />
      </ThemeProvider>
    </View>
  );
}

function Details({ navigation }) {
  return (
    <View style={styles.container}>
      <ThemeProvider useDark={true}>
        <SelectDayOfTheWeek />
        <Button
          type='outline'
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </ThemeProvider>
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
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
    justifyContent: 'center',
  },
  stop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
