import React, {Component} from 'react';
class EmployeeList extends Component {
    render() {
        return (
            <article>
                <h1>Employee List</h1>
              {this.props.employees.map((employee) => {
                 return <p key={employee.id}>{employee.name}<button className ="deleteEmployeeButton" onClick={() => this.props.deleteEmployee(employee.id)}>you're fired</button></p>
              })}
            </article>
        );
    }
}

export default EmployeeList;