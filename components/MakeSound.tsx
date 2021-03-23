import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Audio } from 'expo-av';

const sound = new Audio.Sound();
let isPlaying :boolean = false;

export const playSound = async () => {
  if (!isPlaying) {
    isPlaying = true;
    console.log('loading sound');
    await sound.loadAsync(require('../assets/mp3/Alarm.mp3'));
    console.log('Playing sound');
    await sound.setIsLoopingAsync(true);
    await sound.playAsync();
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
    <View>
      <View style={styles.button}>
        <Button title="play sound" type='outline' onPress={playSound} />
      </View>
      <View style={styles.button}>
        <Button title='pause sound' type='outline' onPress={pauseSound} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10
  }
});
