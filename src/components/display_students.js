import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class DisplayStudents extends Component {
  handleDelete(student) {
    this.props.deleteStudent(student);
  }

  renderList() {
    return this.props.allStudents.map(student => {
      return (
        <li onClick={() => this.handleDelete(student)} className="list-group-item" key={student}>
          {student}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { allStudents: state.students }
}

export default connect(mapStateToProps, actions)(DisplayStudents);
