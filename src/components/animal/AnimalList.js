import React, {Component} from 'react';
class AnimalList extends Component {
    render() {
        return (
            <article>
                <h1>ANEEMALS ANEEMALS ANEEMALS</h1>
              {this.props.animals.map((animal) => {
                 return <p key={animal.id}>{animal.name}</p>
              })}
            </article>
        );
    }
}

export default AnimalList;