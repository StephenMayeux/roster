export default function(state = [], action) {
  switch(action.type) {
    case 'ADD_STUDENT':
      return [ action.payload, ...state ];
  }
  return state;
}
