import React, {Component} from 'react';
import EmployeeCard from "./EmployeeCard"

class EmployeeList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="employeeButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")}
                            }>
                        Add Employee
                    </button>
                </div>
                <section className="employees">
                {this.props.employees.map(singleEmployee =>
                    <EmployeeCard {...this.props}
                    key={singleEmployee.id}
                    employee={singleEmployee}
                    />
                )
            }
            </section>
            </React.Fragment>
        )
        }}
export default EmployeeList;