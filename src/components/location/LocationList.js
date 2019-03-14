import React, {Component} from 'react';
import EmployeeCard from '../employee/EmployeeCard';
import '../animal/Animal.css'

class LocationList extends Component {
    render() {
        return (
            <React.Fragment>
            <article>
                <h1>Location List</h1>
                {this.props.locations.map((location) => {
                 return <h4 className="locationHeading" key={location.id}>{location.name}: {location.address} <h4>Current Employees:</h4> <p className="employeeLocations">
                 {this.props.employees.filter(employee => employee.locationId === location.id).map(matchingEmployee =>
                 <EmployeeCard
                 {...this.props}
                 key={matchingEmployee.id}
                 employee={matchingEmployee}
                 /> )}
             </p> </h4>
              })}
            </article>
            </React.Fragment>
        )
    }
}
export default LocationList