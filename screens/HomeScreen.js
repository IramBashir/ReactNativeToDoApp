// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../actions';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const TaskTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`;

const HomeScreen = ({ navigation }) => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View>
            <TaskTitle>{item.title}</TaskTitle>
            <Button title="Edit" onPress={() => navigation.navigate('Task', { task: item })} />
            <Button title="Delete" onPress={() => dispatch(deleteTask(item.id))} />
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <Button title="Add Task" onPress={() => navigation.navigate('Task')} />
    </View>
  );
};

export default HomeScreen;
