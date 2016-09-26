export function addStudent(name) {
  return {
    type: 'ADD_STUDENT',
    payload: name
  };
}

export function deleteStudent(name) {
  console.log('action', name);
  return {
    type: 'DELETE_STUDENT',
    payload: name
  };
}
