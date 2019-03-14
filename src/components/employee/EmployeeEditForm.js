import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeeManager"

export default class EmployeeEditForm extends Component {
    // Set initial state
    state = {
      name: "",
      title: "",
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
      evt.preventDefault();


        const editedEmployee = {
          id: this.props.match.params.employeeId,
          name: this.state.employeeName,
          title: this.state.employeeTitle,

        };

    this.props.updateEmployee(editedEmployee)
    .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
      EmployeeManager.getOne(this.props.match.params.employeeId)
      .then(employee => {
        this.setState({
         employeeName: employee.name,
          employeeTitle: employee.title,
          id: employee.id,
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form className="employeeForm">
            <div className="form-group">
              <label htmlFor="employeeName">Employee name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeName"
                value = {this.state.employeeName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Employee position</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeTitle"
                value = {this.state.employeeTitle}
              />
            </div>
            <button
              type="submit"
              onClick={this.updateExistingEmployee}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}