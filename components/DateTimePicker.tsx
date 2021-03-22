import React, { useState } from 'react';
import { Button, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { playSound } from './MakeSound';
import { storage, setDateList } from './storage';
// import { deleteDataList } from './storage';

const DateTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  // deleteDataList();

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date :Date) => {
    setDateList(date);
    hideDatePicker();
  };

  return (
    <View>
      <Button title='show date picker' onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='time'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  )
}

export default DateTimePicker;
