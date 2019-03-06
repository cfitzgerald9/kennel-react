import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'


class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: [],
        ownedAnimals: []
    };
    componentDidMount() {
        const newState = {};
        fetch("http://localhost:5002/employees")
            .then(employees => employees.json())
            .then(parsedEmployees => {
                newState.employees = parsedEmployees;
                return fetch("http://localhost:5002/locations")
            }).then(locations => locations.json())
            .then(parsedlocations => {
                newState.locations = parsedlocations;
                return fetch("http://localhost:5002/animals")
            }).then(animals => animals.json())
            .then(parsedanimals => {
                newState.animals = parsedanimals;
                return fetch("http://localhost:5002/owners")
            }).then(owners => owners.json())
            .then(parsedOwners => {
                newState.owners = parsedOwners;
                this.setState(newState)
            })
    }

    render() {
        return (
            <div className="container-div">
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals}
                        owners={this.state.owners} ownedAnimals={this.state.ownedAnimals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </div>
        )
    }
}

export default ApplicationViews