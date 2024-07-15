// screens/TaskScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../actions';

const TaskScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [taskId, setTaskId] = useState(null);

  useEffect(() => {
    if (route.params?.task) {
      setTitle(route.params.task.title);
      setTaskId(route.params.task.id);
    }
  }, [route.params]);

  const handleSave = () => {
    if (taskId) {
      dispatch(updateTask({ id: taskId, title }));
    } else {
      dispatch(addTask({ id: Date.now().toString(), title }));
    }
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default TaskScreen;
