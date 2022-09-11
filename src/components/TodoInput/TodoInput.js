import React, {useState} from 'react';
import {Button, TextInput, View, Alert} from 'react-native';
import styles from './TodoInput.styles';

const TodoInput = ({addTodo}) => {
  const [todo, setTodo] = useState('');
  const handleTodo = () => {
    if (todo.length > 0) {
      addTodo(todo);
      setTodo('');
    } else {
      Alert.alert('Lütfen yapılacak olan görevi yazınız');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Yapılacak...."
        onChangeText={text => setTodo(text)}
        value={todo}
        style={styles.inputTodo}
      />
      <View style={styles.seperator} />
      <Button title="Kaydet" color="#BF8665" onPress={handleTodo} />
    </View>
  );
};

export default TodoInput;
