import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

const sound = new Audio.Sound();
let isPlaying :boolean = false;

export const playSound = async () => {
  if (!isPlaying) {
    console.log('Loading sound');
    await sound.loadAsync(require('../assets/mp3/Alarm.mp3'));
    console.log('Playing sound');
    await sound.setIsLoopingAsync(true);
    await sound.playAsync();
    isPlaying = true;
  }
}

export const pauseSound = async () => {
  if (isPlaying) {
    console.log('Pausing sound');
    await sound.pauseAsync();
    console.log('unloading sound');
    await sound.unloadAsync();
    isPlaying = false;
  }
}

export default function MakeSound() {
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
      <Button title='pause sound' onPress={pauseSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  }
});
