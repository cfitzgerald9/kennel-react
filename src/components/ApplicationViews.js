import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animals = [
        { id: 1, name: "Doodles" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Angus" },
        { id: 4, name: "Henley" },
        { id: 5, name: "Derkins" },
        { id: 6, name: "Checkers" }
    ]

    owners = [
        { id: 1, name: "Ryan Tanay", phone: "23162136" },
        { id: 2, name: "Emma Beaton", phone: "21379893071" },
        { id: 3, name: "Dani Adkins", phone: "4577329437" },
        { id: 4, name: "Adam Oswalt", phone: "8797798098" },
        { id: 5, name: "Fletcher Bangs", phone: "76769866" },
        { id: 6, name: "Angela Lee", phone: "8908908089" }
    ]

    ownedAnimals = []

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animals,
        owners: this.owners
    }

    render() {
        return (
            <div className= "container-div">
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
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