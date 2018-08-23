import React, { Component } from 'react'
import FacetItem from './FacetItem'

export default class Facet extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.renderFacets = this.renderFacets.bind(this)
    }

    handleClick(e, key){
        const helper = this.props.helper
        e.preventDefault();
        console.warn(helper.toggleRefine)

        helper.toggleRefine('category', key).search()
        //helper.addFacetRefinement('category', key).search()
    }
    
    renderFacets(key){
        return (
            <FacetItem data={this.props.itemData} name={key} handleClick={this.handleClick}/>
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