// reducers.js
import { loadTasks, saveTasks } from '../utils/storage';

const initialState = {
  tasks: [],
};

const rootReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'ADD_TASK':
      newState = { ...state, tasks: [...state.tasks, action.payload] };
      saveTasks(newState.tasks);
      return newState;
    case 'DELETE_TASK':
      newState = { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
      saveTasks(newState.tasks);
      return newState;
    case 'UPDATE_TASK':
      newState = {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
      saveTasks(newState.tasks);
      return newState;
    default:
      return state;
  }
};

export default rootReducer;
