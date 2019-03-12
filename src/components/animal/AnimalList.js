import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./Animal.css"
import { Link } from "react-router-dom";

export default class AnimalList extends Component {

    render () {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>
                        Admit Animal
                    </button>
                </div>
                <section className="animals">
                {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">

                                <p>{animal.name}</p> <p>{this.props.species.find(speciesParam => speciesParam.id === animal.speciesId).type}</p><img src={this.props.species.find(speciesParam => speciesParam.id === animal.speciesId).icon} className="icon" />
                                <Link className="nav-link" to={`/animals/${animal.id}`}>More Details</Link>
                                <a href="#"
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Release</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}