import { combineReducers } from 'redux';
import Students from './students';
import Victim from './victim';

const rootReducer = combineReducers({
  students: Students,
  victim: Victim
});

export default rootReducer;
