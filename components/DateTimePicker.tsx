import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { loadDate, saveDate } from './storage';
import { scheduleNotificationAsync } from './LocalNortification';
// import { deleteDataList } from './storage';

const DateTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  // deleteDataList();

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date: Date) => {
    saveDate(date);
    setDate(date);
    scheduleNotificationAsync(date);
    loadDate();
    hideDatePicker();
  };

  const getFormatTime = (date: Date) => {
    const h = date.getHours();
    const m = date.getMinutes();
    let hm: string = '';
    if (m < 10){
      hm = h + ':0' + m;
    } else {
      hm = h + ':' + m;
    }
    return hm;
  };

  useEffect(() => {
    console.log('change date', date);
  }, [date]);

  return (
    <View>
      <Text style={styles.text}>{getFormatTime(date)}</Text>
      <Button title='Change alarm time' type='outline' onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='time'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 100,
    fontWeight: 'bold',
    padding: 10
  }
});

export default DateTimePicker;
