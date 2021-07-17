import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy some Beer', key: '1' },
    { text: 'Finish the App', key: '2' },
    { text: 'Play Nickelback', key: '3' },
    { text: 'Grab some lunch at 4', key: '4' },
    { text: 'Check mail for updates at 5', key: '5' },
    { text: 'Register for the next JavaScript event', key: '6' },
    { text: 'Buy new Gaming Headphones', key: '7' },
    { text: 'Shop for new shoes', key: '8' },
    { text: 'Go outside for Dinner', key: '9' },
    { text: 'Feed the Dog before 12', key: '10' },
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('CANNOT ADD ITEM!', 'ToDo item must be more than 3 characters in length', [
        { text: 'Okay', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});