import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function MakeSound() {
  const sound = new Audio.Sound()
  async function playSound() {
    console.log('Loading sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/mp3/Alarm.mp3')
    );
    console.log('Playing sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
        console.log('unloading sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="play sound" onPress={playSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  }
});
