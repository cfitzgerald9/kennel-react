import React, {Component} from 'react';
import { Link } from "react-router-dom";
export default class AnimalCard extends Component{
    render() {
        return(
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">
                <p>Name:  {this.props.animal.name}</p> <p>Species: {this.props.species.find(species => species.id === this.props.animal.speciesId).type}</p>
                <img alt="an icon"src={this.props.species.find(species=> species.id === this.props.animal.speciesId).icon} className="icon" />
                <Link className="btn btn-info" to={`/animals/${this.props.animal.id}`}>More Details</Link>
                <button
                    onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                    className="btn btn-danger">Release</button>
            </h5>
        </div>
    </div>)
    }
}