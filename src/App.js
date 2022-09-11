import {View, Text, FlatList, StyleSheet, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import TodoInput from './components/TodoInput';
import TodoCard from './components/TodoCard';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = text => {
    const todoData = {
      id: new Date().getTime(),
      title: text,
      isDone: false,
    };
    setTodoList([...todoList, todoData]);
  };
  const deleteTodo = id => {
    const filteredData = todoList.filter(item => item.id !== id);
    setTodoList(filteredData);
  };
  const doneTodo = id => {
    const filteredData = todoList.map(item =>
      item.id === id ? {...item, isDone: !item.isDone} : item,
    );
    setTodoList(filteredData);
  };
  const renderData = ({item}) => {
    return <TodoCard item={item} deleteTodo={deleteTodo} doneTodo={doneTodo} />;
  };
  useEffect(() => {
    setCount(todoList.filter(item => !item.isDone).length);
  }, [todoList]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Yapılacaklar</Text>
        <Text style={styles.header_text}>{count}</Text>
      </View>
      <FlatList
        data={todoList}
        keyExtractor={item => item.id}
        style={styles.content}
        renderItem={renderData}
      />
      <TodoInput addTodo={addTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    backgroundColor: 'darkslategrey',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: StatusBar.currentHeight || 0,
  },
  header_text: {
    fontSize: 30,
    color: '#FA7F08',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
});
