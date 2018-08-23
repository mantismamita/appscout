import React, { Component } from 'react'
import Facet from './Facet'

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            allCats: []
        }
    }

    componentWillMount() {
        const helper = this.props.helper
        helper.on('result', (results) => {
            if (results.length === 0) {
                console.warn('no hits')
                return
            }
        })

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