import React, {Component} from 'react';
class LocationList extends Component {
    render() {
        return (
            <article>
                <h1>Location List</h1>
                {this.props.locations.map((location) => {
                 return <p key={location.id}>{location.name}: {location.address}</p>
              })}
            </article>
        );
    }
}
export default LocationList