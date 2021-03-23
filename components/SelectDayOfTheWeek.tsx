import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Text, FlatList } from 'react-native';
import { CheckBox } from 'react-native-elements';

const dayNames = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];

const firstDays = dayNames.map(key => {
  return { key: key, value: false }
});

export default function SelectDayOfTheWeek() {
  const [days, setDays] = useState(firstDays);
  useEffect(() => {
    console.log(new Date());
  }, [days]);
  const falseDays = () => {
    for (const day of days) {
      console.log(days);
    }
  }
  return (
    <View>
      <FlatList data={days} renderItem={({item}) => (
        <CheckBox title={item.key} checked={item.value} onPress={() => {
          const newDays = days.map(val => {
            if (val.key === item.key) {
              val.value = !val.value;
            }
            return {key: val.key, value:val.value}
          })
          setDays(newDays);
        }} />
      )}/>

    </View>
  );
}

const styles = StyleSheet.create({
  texts: {
  }
})
