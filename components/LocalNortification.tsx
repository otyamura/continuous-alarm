import * as React from 'react';
import * as Notifications from 'expo-notifications';

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
