import React, { Component } from 'react'
import Facet from './Facet'
import { GlobalContext } from "./GlobalContext";

export default class Sidebar extends Component {
    removeFilters(helper) {
        helper.removeFacetRefinement('category').search()
    }

    render() {
        return (
            <div className="sidebar">
            {this.props.facets.map((item, index) => {
                return (
                <div className="facet" key={index}>
                    <Facet itemData={item.data} itemName={item.name} helper={this.props.helper}/>
                </div>
                )
            })}
            <GlobalContext.Consumer>
                {context => (
                    <button onClick={(e)=> this.removeFilters(context.helper) }>{context.button}</button>
                )}
            </GlobalContext.Consumer>
            </div>
        )
    }
}