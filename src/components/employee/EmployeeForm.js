import React, { Component } from "react";

export default class EmployeeForm extends Component {

    state = {
        employeeName: "",
        title: "",
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    constructNewEmployee = evt => {
        evt.preventDefault();
            const employee = {
                name: this.state.employeeName,
                title: this.state.title,

            }
            this.props
                .addEmployee(employee)
                .then(() => this.props.history.push("/employees"));
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
                            placeholder="Employee name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Title">Title</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="title"
                            placeholder="title"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewEmployee}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        );
    }
}