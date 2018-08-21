import React, { Component } from 'react';

export default class Facet extends Component {
    constructor(props) {
        super(props)
        this.facetRef = React.createRef()
        this.handleClick = this.handleClick.bind(this)
        this.renderFacets = this.renderFacets.bind(this)
    }

    handleClick(e){
        const helper = this.props.helper
        e.preventDefault();

        helper.toggleRefine('category', 'music').search();
    }
    
    renderFacets(key){
        const data = this.props.itemData
        return (
            <li className="facet-item" key={key}>
                <a mycustomattribute="something" onClick={this.handleClick}>
                    {key} <span>{data[key]}</span>
                </a>
            </li>
        )
    }

    render() {

        return (
            <React.Fragment>
            <p>{this.props.itemName}</p>
            <ul>
                { Object.keys(this.props.itemData).map(this.renderFacets) }
            </ul>
            </React.Fragment>
        )
    }
}