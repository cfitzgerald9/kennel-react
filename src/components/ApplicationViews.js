import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from '../modules/EmployeeManager'
import OwnerManager from '../modules/OwnerManager'
import LocationManager from '../modules/LocationManager'


class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: [],
        ownedAnimals: []
    };

    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        })
      )
    }

    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(r => r.json())
        .then(employees => this.setState({
            employees: employees
        })
      )
    }

    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`,{
            method: "DELETE"
        })
        .then(response => response.json())
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(response => response.json())
        .then(owners => this.setState({
                owners: owners
        }))
    }
    componentDidMount() {
        const newState = {};
        LocationManager.getAll()
        .then(allLocations => newState.locations = allLocations)
        .then(OwnerManager.getAll)
        .then(allOwners =>newState.owners = allOwners)
        .then(EmployeeManager.getAll)
        .then(allEmployees => newState.employees = allEmployees)
        .then(AnimalManager.getAll)
        .then(allAnimals =>newState.animals = allAnimals)
        .then(() => this.setState(newState))
}

    render() {
        return (
            <div className="container-div">
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} deleteAnimal={this.deleteAnimal}
                        owners={this.state.owners} ownedAnimals={this.state.ownedAnimals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} deleteOwner={this.deleteOwner} />
                }} />
            </div>
        )
    }
}

export default ApplicationViews