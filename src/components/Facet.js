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

        helper.addFacetRefinement('category', key).search()
    }
    
    renderFacets(key){
        return (
            <FacetItem data={this.props.itemData} name={key} handleClick={this.handleClick} key={key}/>
        )
    }

    showFacetList(e) {
        if (e.target.classList.contains('up')){
            e.target.classList.remove('up')
            e.target.classList.add('down')
            e.target.parentElement.classList.remove('show')
        } else if(e.target.classList.contains('down') || !e.target.classList.contains('up')){
            e.target.classList.remove('down')
            e.target.classList.add('up')
            e.target.parentElement.classList.add('show')
        } 
    }

    render() {
        return (
            <React.Fragment>
            <p className="filter-name" onClick={this.showFacetList}>Filter by {this.props.itemName}</p>
            <ul>
                { Object.keys(this.props.itemData).map(this.renderFacets) }
            </ul>
            </React.Fragment>
        )
    }
}