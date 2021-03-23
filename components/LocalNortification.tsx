import * as React from 'react';
import { Button } from 'react-native';
import * as Notifications from 'expo-notifications';
import { playSound } from './MakeSound';

export default function LocalNotification() {
  React.useEffect(() => {
    requestPermissionsAsync();
    const subscription = Notifications.addNotificationReceivedListener(notifications => {
      playSound();
    });
  });

  return (
    <>
    </>
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
  Notifications.cancelAllScheduledNotificationsAsync();
  console.log('start');
  date.setSeconds(0);
  console.log('ceil', date);
  const now = Date.now();
  if (date.getTime() - now > 0) {
    await Notifications.scheduleNotificationAsync({
      content: {
        body: 'Wake Up!'
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
