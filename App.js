import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';

export default function App() {

  const exercise = exercises[0];
 

  return (
    <View style={styles.container}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        Muscle: {exercise.muscle} | Equipment: {exercise.equipment}
      </Text>

      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: '500',
  },
  exerciseSubtitle: {
    color: 'dimgray',
  },
});
