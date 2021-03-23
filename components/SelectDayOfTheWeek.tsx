import React, { useEffect, useState, useReducer } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';
import { storage, saveDays } from './storage';


const dayNames = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];

const firstDays = dayNames.map(key => {
  return { key: key, value: false }
});

export default function SelectDayOfTheWeek() {
  const [days, setDays] = useState(firstDays);
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  useEffect(() => {
    storage
      .load({ key: 'Days' })
      .then(res => {
        let savedDays = dayNames.map(key => {
          return { key: key, value: false }
        });
        for (const day of res) {
          for (let week of savedDays) {
            if (day === week.key) {
              week.value = true;
            }
          }
        }
        setDays(savedDays);
        forceUpdate();
      }).catch(err => {
        console.log(err);
      });
  }, []);

  const onPressSave = () => {
    const list = days.filter(item => {
      return item.value;
    }).map(item => {
      return item.key;
    });
    saveDays(list);
  }

  return (
    <View style={styles.checkboxes}>
      <FlatList data={days} renderItem={({ item }) => (
        <CheckBox containerStyle={{ backgroundColor: 'black' }} center title={item.key} checked={item.value} onPress={() => {
          const newDays = days.map(val => {
            if (val.key === item.key) {
              val.value = !val.value;
            }
            return { key: val.key, value: val.value }
          })
          setDays(newDays);
        }} />
      )} />
      <Button title='Apply' onPress={onPressSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxes: {
    backgroundColor: '#121212',
    justifyContent: 'center',
    padding: 30
  }
})
