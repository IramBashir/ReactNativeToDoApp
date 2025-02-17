// utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveTasks = async (tasks) => {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem('@tasks', jsonValue);
  } catch (e) {
    console.error(e);
  }
};

export const loadTasks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@tasks');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};
