import React, {Component} from 'react';
import ResourceCard from "../generics/ResourceCard"
import "../animal/Animal.css"

class ResourceList extends Component {
    render () {
        const collection = this.props.collection; //"animals", "locations", etc
        return (
            <React.Fragment>
                <div className="addButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(`/${collection}/new`)}
                            }>
                        Add new
                    </button>
                </div>
                <section className="list">
                {this.props.resources.map(resource =>
                    <ResourceCard {...this.props}
                    key={resource.id}
                    resource={resource}
                    route = {collection}
                    />
                )
            }
            </section>
            </React.Fragment>
        )
        }}
export default ResourceList;