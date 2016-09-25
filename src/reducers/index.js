import { combineReducers } from 'redux';
import Students from './students';

const rootReducer = combineReducers({
  students: Students
});

export default rootReducer;
