import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Task } from './components/taskr/Task';
import { ButtonComp } from './components/taskr/ButtonComp'

const TASKERS = [
  { id: 1, description: "Ola mundo"},
  { id: 2, description: "Ola High"},
  { id: 3, description: "Hello guys"},
  { id: 4, description: "Aprendendo com React-Native"}
]



export default function App(){
  return(
    <View style={styles.container}>
      {TASKERS.map((t) => <Task description={t.description} />)}
      <ButtonComp/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})