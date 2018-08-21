import React, { Component } from 'react'
import Facet from './Facet'

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.renderFacets= this.renderFacets.bind(this)
        this.state = { 
            facetValues: []
          }
    }

    componentWillMount() {
        const helper = this.props.helper
        helper.on('result', (results) => {
            if (results.length === 0) {
                console.warn('no hits')
                return
            }

            // this.setState({
            //     facetValues: results.getFacetValues(name)
            // })   
        })
    }

    renderFacets(results, name) {
        let facetValues = results.getFacetValues(name);

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
            </div>
        )
    }
}