import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    borderRadius: 15,
    height: 'auto',
  },
  album: {
    minHeight: 60,
    padding: 5,
    borderRadius: 15,
    backgroundColor: '#734429',
  },
  todos: {
    minHeight: 60,
    backgroundColor: '#736626',
    borderRadius: 15,
    padding: 5,
  },
  title: {
    fontSize: 25,
    color: 'white',
    textTransform: 'capitalize',
  },
  titleDone: {
    fontSize: 25,
    textTransform: 'capitalize',
    textDecorationLine: 'line-through',
    color: 'lightslategray',
  },
});

export default styles;
