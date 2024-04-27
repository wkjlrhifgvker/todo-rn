import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task  from "./compnents/task.js"

export default function App() {
  const handleTask = () => { }
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}></View>
      <Text style={styles.title}>Tytul taska</Text>
      <View style={styles.items}>
        <Task text="task 1"></Task>
        <Task text="task 2"></Task>
        <Task text="task 3"></Task>
      </View>
      
      <KeyboardAvoidingView style={styles.writeTaskWapper}>

                <TextInput style={styles.input} placeholder={'write a task...'}/>
                <TouchableOpacity onPress={() => handleTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items:  {
    marginTop: 30,
  },
  wrapperTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'spaceAround',
    alingItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    width: 250, 
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {},
});
