import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import LocationList from './location/LocationList'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from '../modules/EmployeeManager'
import OwnerManager from '../modules/OwnerManager'
import LocationManager from '../modules/LocationManager'
import AnimalDetail from './animal/AnimalDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import SpeciesManager from '../modules/SpeciesManager'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import Login from './authentication/Login'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import OwnerDetail from './owner/OwnerDetail'
import ResourceList from './generics/ResourceList'
import OwnerForm from './owner/OwnerForm'



class ApplicationViews extends Component {

    state = {
        employees: [],
        locations: [],
        animals: [],
        owners: [],
        ownedAnimals: [],
        species: []
    };
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

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
    };
    addAnimal = animal =>
        AnimalManager.post(animal)
            .then(() => AnimalManager.getAll())
            .then(animals =>
                this.setState({
                    animals: animals
                })
            );
    addEmployee = employee =>
        EmployeeManager.post(employee)
            .then(() => EmployeeManager.getAll())
            .then(employees =>
                this.setState({
                    employees: employees
                })
            );
        addOwner = owner =>
        OwnerManager.post(owner)
            .then(() => OwnerManager.getAll())
            .then(owners =>
                this.setState({
                    owners: owners
                })
            );

    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
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
            .then(allOwners => newState.owners = allOwners)
            .then(EmployeeManager.getAll)
            .then(allEmployees => newState.employees = allEmployees)
            .then(AnimalManager.getAll)
            .then(allAnimals => newState.animals = allAnimals)
            .then(SpeciesManager.getAll)
            .then(allSpecies => newState.species = allSpecies)
            .then(() => this.setState(newState))
    }
    updateAnimal = (editedAnimalObject) => {
        return AnimalManager.put(editedAnimalObject)
        .then(() => AnimalManager.getAll())
        .then(animals => {
          this.setState({
            animals: animals
          })
        });
      };
      updateEmployee = (editedEmployeeObject) => {
        return EmployeeManager.put(editedEmployeeObject)
        .then(() => EmployeeManager.getAll())
        .then(employees => {
          this.setState({
            employees: employees
          })
        });
      };


    render() {
        return (
            <div className="container-div">
                <Route path="/login" component={Login} />
                <Route exact path="/" render={(props) => {
                     if (this.isAuthenticated()) {
                    return <LocationList
                    collection = "locations"
                        locations={this.state.locations}
                        employees={this.state.employees}
                        animals={this.state.animals}
                        species={this.state.species}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ResourceList {...props}
                        collection="animals"
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals}
                            species={this.state.species}
                            resources={this.state.animals} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/animals/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalForm {...props}
                            addAnimal={this.addAnimal}
                            employees={this.state.employees}
                            species={this.state.species} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                  <Route path="/owners/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerForm {...props}
                            addOwner={this.addOwner}
                            owners={this.state.owners} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalDetail {...props}
                            deleteAnimal={this.deleteAnimal}
                            animals={this.state.animals}
                            species={this.state.species}
                            employees={this.state.employees}
                             />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                      <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerDetail {...props}
                            owners={this.state.owners}
                             />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route
                    path="/animals/:animalId(\d+)/edit" render={props => {
                        return <AnimalEditForm {...props}
                        employees={this.state.employees}
                        updateAnimal={this.updateAnimal}
                        species={this.state.species} />
                    }}
                />
                  <Route
                    path="/employees/:employeeId(\d+)/edit" render={props => {
                        return <EmployeeEditForm {...props}
                        employees={this.state.employees}
                        updateEmployee ={this.updateEmployee}/>
                    }}
                />

                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <ResourceList
                        collection="employees"
                        deleteEmployee={this.deleteEmployee}
                        resources={this.state.employees}
                            employees={this.state.employees}
                            animals={this.state.animals}
                            species={this.state.species} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeDetail {...props}
                            deleteEmployee={this.deleteEmployee}
                            employees={this.state.employees}
                            animals={this.state.animals}
                            species={this.state.species} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/new" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeForm {...props}
                            addEmployee={this.addEmployee}
                            employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ResourceList {...props}
                            collection = "owners"

                            resources={this.state.owners}
                         />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

            </div>
        )
    }
}

export default ApplicationViews