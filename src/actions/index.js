export function addStudent(name) {
  return {
    type: 'ADD_STUDENT',
    payload: name
  };
}
