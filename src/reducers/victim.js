export default function(state = {}, action) {
  switch(action.type) {
    case 'NEW_VICTIM':
      return {...state, name: action.payload };
  }
  return state;
}
