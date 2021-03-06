import React, { Component } from "react"
import AnimalCard from "../animal/AnimalCard"



export default class EmployeeDetail extends Component {
    render() {
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <section className="employee">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h3>{employee.name}</h3>
                        <h6 className="card-title">{employee.title}</h6>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => this.props.deleteEmployee(employee.id)
                                .then(() => this.props.history.push("/employees"))}
                        >Delete</button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                                this.props.history.push(`/employees/${employee.id}/edit`);
                            }}>Edit</button>
                              <section> Current animals in care:
                                    {this.props.animals.filter(animal => animal.employeeId === employee.id).map(matchingAnimal =>
                                    <AnimalCard
                                    {...this.props}
                                    key={matchingAnimal.id}
                                    animal={matchingAnimal}
                                    /> )}
                                </section>
                    </div>
                </div>
            </section>
        )
    }
}
