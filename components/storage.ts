import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';
import { scheduleNotificationAsync } from './LocalNortification';


export const storage: Storage = new Storage({
  size: 100,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true
});

export const deleteDataList = () => {
  storage.remove({
    key: 'Date'
  });
}

export const loadDate = async () => {
  storage
    .load({ key: 'Date' })
    .then(res => {
      const date = new Date(res);
      console.log(date);
      scheduleNotificationAsync(date);
    }).catch(err => {
      console.log(err);
    })
}

export const saveDate = async (date: Date) => {
  storage.save({
    key: 'Date',
    data: date,
  });
}
