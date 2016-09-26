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

  displayVictim() {
    let max = this.props.allStudents.length;
    var random = Math.floor(Math.random() * max);
    this.props.newVictim(this.props.allStudents[random]);
  }

  render() {
    return (
      <div>
        <h3>{this.props.victim}</h3>
        <form className="form-group" onSubmit={this.handleFormSubmit.bind(this)}>
          <input className="form-control" value={this.state.formTerm} onChange={this.handleChange.bind(this)}/>
        </form>
        <button className="btn btn-primary" onClick={this.displayVictim.bind(this)} >
          Choose a Victim!
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    victim: state.victim.name,
    allStudents: state.students
  };
}

export default connect(mapStateToProps, actions)(AddStudent);
