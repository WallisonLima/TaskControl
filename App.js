import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Task } from './components/task/Task';
import { ButtonTask } from './components/task/ButtonTask'


const INITIAL_TASKS = [
  { id: 1, description: 'Fazer atividade de Engenharia de Software', complete: false },
  { id: 2, description: 'Estudar materia de Calculo', complete: false },
  { id: 3, description: 'Checar emails', complete: false },
  { id: 4, description: 'Checar ProgramaThor', complete: false },
  { id: 5, description: 'Falar com a Noiva', complete: false },
  { id: 6, description: 'Estudar English', complete: false },
]

export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const handleOnToggleComplete = (index) => {
    const newTasks = [
      ...tasks.slice(0, index),
      { ...tasks[index], complete: !tasks[index].complete },
      ...tasks.slice(index + 1),
    ]
    setTasks(newTasks)
  }

  return (
    <View style={styles.container}>
      <Button onPress={() => setTasks([])} title='Zerar Tarefas' /> 
      {tasks.map((t, index) => (
        <Task
          description={t.description}
          complete={t.complete}
          onToggleComplete={() => handleOnToggleComplete(index)}
        />
      ))}
      <ButtonTask />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})