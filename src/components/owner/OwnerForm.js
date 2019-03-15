import React, { Component } from "react";

export default class OwnerForm extends Component {

    state = {
        ownerName: "",
        phone: "",
        email: "",
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    constructNewOwner = evt => {
        evt.preventDefault();
            const owner = {
                name: this.state.ownerName,
                phone: this.state.phone,
                email: this.state.email,
                image: this.state.image

            }
            this.props
                .addOwner(owner)
                .then(() => this.props.history.push("/owners"));
        }


    render() {
        return (
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="ownerName"
                            placeholder="Owner name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Phone">Phone</label>
                        <input
                            type="number"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="phone"
                            placeholder="phone"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input
                            type="email"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="email"
                            placeholder="email"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewOwner}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        );
    }
}