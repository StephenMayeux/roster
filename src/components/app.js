import React, { Component } from 'react';

import AddStudent from './add_student';
import DisplayStudents from './display_students';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <AddStudent />
          </div>
          <div className="col-md-8">
            <DisplayStudents />
          </div>
        </div>
      </div>
    );
  }
}
