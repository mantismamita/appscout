import React, { Component } from 'react';

export default class Facet extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.renderFacets = this.renderFacets.bind(this)
    }

    handleClick(e, key){
        const helper = this.props.helper
        e.preventDefault();
        console.warn(key)

        helper.toggleRefine('category', key).search()
    }
    
    renderFacets(key){
        const data = this.props.itemData
        return (
            <li className="facet-item" key={key}>
                <a ref={key} onClick={(e) => this.handleClick(e, key)}>
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