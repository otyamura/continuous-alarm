import * as React from 'react';
import { useState } from 'react';
import { Button, Text, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
import { playSound } from './MakeSound';

export default function LocalNotification() {

  const [date, setDate] = useState(new Date());
  React.useEffect(() => {
    requestPermissionsAsync();
    const subscription = Notifications.addNotificationReceivedListener(notifications => {
      playSound();
    });
    console.log('update',date);
  });

  const oneMinuteNotificationAsync = () => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 1);
    scheduleNotificationAsync(now);
  };

  const getFormatTime = (date: Date) => {
    const h = date.getHours();
    const m = date.getMinutes();
    const hm: string = h + ':' + m;
    return hm;
  }

  return (
    <>
      <Text style={styles.text}>{getFormatTime(date)}</Text>
      <Button title='after one minute notification' onPress={oneMinuteNotificationAsync} />
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 100,
    fontWeight: 'bold'
  }
});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  }),
});

export const scheduleNotificationAsync = async (date: Date) => {
  console.log('start');
  date.setSeconds(0);
  console.log('ceil', date);
  const now = Date.now();
  if (date.getTime() - now > 0) {
    await Notifications.scheduleNotificationAsync({
      content: {
        body: 'test'
      },
      trigger: date
    }
    );
  } else {
    console.warn('set time is old');
  }
}

const requestPermissionsAsync = async () => {
  const { granted } = await Notifications.getPermissionsAsync();
  if (granted) { return }
  await Notifications.requestPermissionsAsync();
}
