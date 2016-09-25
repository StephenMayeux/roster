import React, { Component } from 'react';
import { connect } from 'react-redux';

class DisplayStudents extends Component {
  renderList() {
    return this.props.allStudents.map(student => {
      return (
        <li key={student}>{student}</li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { allStudents: state.students }
}

export default connect(mapStateToProps)(DisplayStudents);
