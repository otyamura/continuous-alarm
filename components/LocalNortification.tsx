import * as React from 'react';
import { Button } from 'react-native';
import * as Notifications from 'expo-notifications';
import { loadDate } from './storage';

export default function LocalNotification() {
  React.useEffect(() => {
    requestPermissionsAsync();
  });
  return (
    <></>
    // <Button title='3秒後にプッシュ通知する' onPress={scheduleNotificationAsync} />
  );
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  }),
});

export const scheduleNotificationAsync = async (date: Date) => {
  console.log('start');
  // const date = await loadDate();
  console.log('test', date);
  date.setSeconds(date.getSeconds() + 3);
  await Notifications.scheduleNotificationAsync({
    content: {
      body: 'test'
    },
    trigger: date
  }
  );
}

const requestPermissionsAsync = async () => {
  const { granted } = await Notifications.getPermissionsAsync();
  if (granted) { return }

  await Notifications.requestPermissionsAsync();
}
