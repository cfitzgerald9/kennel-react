import React, {Component} from 'react';
import { Link } from "react-router-dom";
export default class EmployeeCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div key={this.props.employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <p>{this.props.employee.name}</p> <p>{this.props.employee.title}</p>

                                <Link className="btn btn-info" to={`/employees/${this.props.employee.id}`}>More Details</Link>
                                <button
                                    onClick={() => this.props.deleteEmployee(this.props.employee.id)}
                                    className="btn btn-danger">Fire</button>
                            </h5>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}