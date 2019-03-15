import React, {Component} from 'react';
import ResourceCard from '../generics/ResourceCard';
import '../animal/Animal.css'

class LocationList extends Component {
    render() {
        return (
            <React.Fragment>
            <article>
                <h1>Location List</h1>
                {this.props.locations.map((location) => {
                 return <h4 className="locationHeading" key={location.id}>{location.name}: {location.address} <img src={location.image} className="icon"/> <h4>Current Employees:</h4> <p className="employeeLocations">
                 {this.props.employees.filter(employee => employee.locationId === location.id).map(matchingEmployee =>
                 <ResourceCard
                 {...this.props}
                 key={matchingEmployee.id}
                 resource={matchingEmployee}
                 route="employees"
                 /> )}
             </p> </h4>
              })}
            </article>
            </React.Fragment>
        )
    }
}
export default LocationList