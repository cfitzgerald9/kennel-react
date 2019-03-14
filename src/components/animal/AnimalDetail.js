import React, { Component } from "react"
import "./Animal.css"


export default class AnimalDetail extends Component {
    render() {
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}

        return (

            <section className="animal">
                <div key={animal.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img alt ="an icon"src={this.props.species.find(speciesParam => speciesParam.id === animal.speciesId).icon} className="icon" />
                            {animal.name}
                        </h4>
                        <div>
                            <h5>Species:  {this.props.species.find(speciesParam => speciesParam.id === animal.speciesId).type}</h5>
                            <h5>Breed:  {animal.breed}</h5>
                            <h5>Caretaker:  {this.props.employees.find(employee => employee.id === animal.employeeId).name} </h5>
                            <button
                                onClick={() => this.props.deleteAnimal(animal.id)
                                    .then(() => this.props.history.push("/animals"))}
                                className="btn btn-danger">Release</button>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/animals/${animal.id}/edit`);
                                }}>Edit</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
