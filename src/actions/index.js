export function addStudent(name) {
  return {
    type: 'ADD_STUDENT',
    payload: name
  };
}

export function deleteStudent(name) {
  return {
    type: 'DELETE_STUDENT',
    payload: name
  };
}

export function newVictim(name) {
  return {
    type: 'NEW_VICTIM',
    payload: name
  };
}
