import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formTerm: ''
    };
  }

  handleChange(event) {
    this.setState({ formTerm: event.target.value });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.addStudent(this.state.formTerm);
    this.setState({ formTerm: '' });
  }

  render() {
    return (
      <div>
        <form className="form-group" onSubmit={this.handleFormSubmit.bind(this)}>
          <label>Enter student name</label>
          <input className="form-control" value={this.state.formTerm} onChange={this.handleChange.bind(this)}/>
        </form>
      </div>
    );
  }
}

export default connect(null, actions)(AddStudent);
