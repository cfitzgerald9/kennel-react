import React, {Component} from 'react';
class OwnerList extends Component {
    render() {
        return (
            <article>
                <h1>Owner Contact</h1>
              {this.props.owners.map((owner) => {
                 return <div key={owner.id}><p>{owner.name}</p><p>Phone: {owner.phone}</p>
                 <hr></hr>
                 </div>
              })}
            </article>
        );
    }
}

export default OwnerList