import React, { Component } from "react"


export default class OwnerDetail extends Component {
    render() {
        const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}

        return (
            <React.Fragment>
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img alt ="an icon"src={owner.image} className="icon" />
                            {owner.name}
                        </h4>
                        <ul>Contact:
                        <li>Phone:  {owner.phone}</li>
                        <li>Email:  {owner.email}</li>
                        </ul>
                </div>
                </div>
            </React.Fragment>
        )
    }
}