import React, { useState } from 'react';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

export const storage: Storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true
});

export const deleteDataList = () => {
  storage.remove({
    key : 'Dates'
  });
}

export const getDateList = (date: Date) => {
  storage
    .load({ key: 'Dates' })
    .then(data => {
      data.push(date);
      const dateList :Date[] = data;
      console.log(dateList);
      setDateList(dateList);
    })
    .catch(err => {
      let dateList :Date[] = [];
      dateList.push(date);
      storage.save({
        key: 'Dates',
        data: dateList
      })
    });
}

export const setDateList = async (dateList: Date[]) => {
  console.log('promise wakaran');
  storage.save({
    key: 'Dates',
    data: dateList,
  });
}
