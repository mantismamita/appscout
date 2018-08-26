import React, { Component } from 'react'
import Facet from './Facet'
import { GlobalContext } from "./GlobalContext";

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.removeFilters = this.removeFilters.bind(this)
        this.renderConsumer = this.renderConsumer.bind(this)
    }
    removeFilters(helper) {
        helper.removeFacetRefinement('category').search()
    }

    renderConsumer(){
        return (
            <GlobalContext.Consumer>
                {({ button, helper }) => {
                    return (
                        <div>
                        { helper.hasRefinements('category') 
                        ? <button onClick={ e => this.removeFilters(helper) }>{button}</button>
                        : '' }
                        </div>
                    )
                }}
            </GlobalContext.Consumer>
        )
    }

    render() {
        return (
            <div className="sidebar">
            {this.props.facets.map((item, index) => {
                return (
                <div className="facet" key={index}>
                    <Facet itemData={item.data} itemName={item.name} helper={this.props.helper} />
                </div>
                )
            })}
            {this.renderConsumer()}
            </div>
        )
    }
}