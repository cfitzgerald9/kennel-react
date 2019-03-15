import React, {Component} from 'react';
import { Link } from "react-router-dom";
export default class ResourceCard extends Component{
    render() {
        return(
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">
                <p>Name:  {this.props.resource.name}</p>
                <img alt="an icon"src={this.props.resource.image} className="icon" />
                <Link className="btn btn-info" to={`/${this.props.route}/${this.props.resource.id}`}>More Details</Link>
            </h5>
        </div>
    </div>)
    }
}