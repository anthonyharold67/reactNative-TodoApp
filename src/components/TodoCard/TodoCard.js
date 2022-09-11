import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './TodoCard.styles';

const SongCard = ({item, doneTodo, deleteTodo}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={item.isDone ? styles.album : styles.todos}
        onPress={() => doneTodo(item.id)}
        onLongPress={() => deleteTodo(item.id)}>
        <Text style={item.isDone ? styles.titleDone : styles.title}>
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SongCard;
