import * as React from 'react';
import * as Notifications from 'expo-notifications';
import { playSound } from './MakeSound';
import { storage } from './storage';


const dayNames = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];

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
  const h = date.getHours();
  const m = date.getMinutes();
  const d = date.getDay() + 1;
  if (date.getTime() - now > 0) {
    storage
      .load({ key: 'Days' })
      .then(res => {
        const dayNums :number[] = res.map(d => {
          console.log('d', d);
          for (const ind in dayNames) {
            if (dayNames[ind] === d) return ind;
          }
        })
        console.log(dayNums);
        if (dayNums.length) {
          for (const dayNum of dayNums) {
            console.log('setting ok');
            // 1-indexなので+1
            registNotification(h, m, dayNum * 1 + 1, true);
          }
        } else {
          console.log('nannmo nai');
          registNotification(h, m, d, false);
        }
      }).catch(err => {
        console.log(err);
      });
  } else {
    console.warn('set time is old');
  }
}

const registNotification = async (h: number, m: number, day: number, isRepeat: boolean) => {
  Notifications.scheduleNotificationAsync({
    content: {
      body: 'Wake Up!'
    },
    trigger: {
      // weekday: 1が日曜で7が土曜日
      weekday: day,
      hour: h,
      minute: m,
      repeats: isRepeat
    }
  }
  );
}

const requestPermissionsAsync = async () => {
  const { granted } = await Notifications.getPermissionsAsync();
  if (granted) { return }
  await Notifications.requestPermissionsAsync();
}
