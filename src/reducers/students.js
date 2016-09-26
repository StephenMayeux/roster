export default function(state = [], action) {
  switch(action.type) {
    case 'ADD_STUDENT':
      return [ action.payload, ...state ];
    case 'DELETE_STUDENT':
      return state.filter(student => student !== action.payload);
  }
  return state;
}
