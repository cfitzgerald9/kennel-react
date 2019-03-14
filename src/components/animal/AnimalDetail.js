import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.png"


export default class AnimalDetail extends Component {
    render() {
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}

        return (

            <section className="animal">
                <div key={animal.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={this.props.species.find(speciesParam => speciesParam.id === animal.speciesId).icon} className="icon" />
                            {animal.name}
                        </h4>
                        <div>
                        <h5>{this.props.species.find(speciesParam => speciesParam.id === animal.speciesId).type}</h5>
                        <h5>{animal.breed}</h5>
                        <h6>{this.props.employees.find(employee => employee.id === animal.employeeId).name} </h6>
                            <a href="#"
                                onClick={() => this.props.deleteAnimal(animal.id)
                                    .then(() => this.props.history.push("/animals"))}
                                className="card-link">Delete</a>
                            <button
  type="button"
  className="btn btn-success"
  onClick={() => {
    this.props.history.push(`/animals/${animal.id}/edit`);
  }}
>
  Edit
</button>

                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
