import * as React from 'react';
import { Button } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function LocalNotification() {
  React.useEffect(() => {
    requestPermissionsAsync();
  });

  return (
    <Button title='3秒後にプッシュ通知する' onPress={scheduleNotificationAsync}></Button>
  );
}

const scheduleNotificationAsync = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      body: 'test'
    },
    trigger: {
      seconds: 3
    }
  });
}

const requestPermissionsAsync = async () => {
  const { granted } = await Notifications.getPermissionsAsync();
  if (granted) { return }

  await Notifications.requestPermissionsAsync();
}
