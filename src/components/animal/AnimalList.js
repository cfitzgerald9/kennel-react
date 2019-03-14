import React, { Component } from 'react'
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
                                <p>Name:  {animal.name}</p> <p>Species: {this.props.species.find(species => species.id === animal.speciesId).type}</p>
                                <img alt="an icon"src={this.props.species.find(species=> species.id === animal.speciesId).icon} className="icon" />
                                <Link className="btn btn-info" to={`/animals/${animal.id}`}>More Details</Link>
                                <button
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="btn btn-danger">Release</button>
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