import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { ButtonTask } from './components/task/ButtonTask';
import { Task } from './components/task/Task';
import { ButtonRestau } from './components/task/ButtonRestau'


const INITIAL_TASKS = [
  { id: 1, description: 'Fazer atividade de Engenharia de Software', complete: false },
  { id: 2, description: 'Estudar materia de Calculo', complete: false },
  { id: 3, description: 'Checar emails', complete: false },
  { id: 4, description: 'Checar Slack', complete: false },
  { id: 5, description: 'Estudar React-Native', complete: false },
  { id: 6, description: 'Estudar English', complete: false },
]

export default function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const handleToggleComplete = (index) => {
    const newTasks = [
      ...tasks.slice(0, index),
      { ...tasks[index], complete: !tasks[index].complete },
      ...tasks.slice(index + 1),
    ]
    setTasks(newTasks)
  }

  const handleToggleClear = (index) => {
    const newTasksClear = [
      ...tasks.slice(0, index),
      ...tasks.slice(index + 1),
    ]

    setTasks(newTasksClear)
  }
  const butt = {
    description: 'clica em mim'
  }

  const handleToggleRestau = (INITIAL_TASKS)=>{
      setTasks(INITIAL_TASKS)
  }

  return (
    <View style={styles.container}>
      {tasks.map((t, index) => (
        <Task
          description={t.description}
          complete={t.complete}
          onToggleComplete={() => handleToggleComplete(index)}
          onToggleClear={() => handleToggleClear}
        />
      ))}
      <ButtonTask description={butt.description} />
      <ButtonRestau  onToggleRestau={() => handleToggleRestau(INITIAL_TASKS)} />
      <Button onPress={() => setTasks([])} title="Zerar Tarefas" />
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