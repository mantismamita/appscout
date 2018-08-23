import React, { Component } from 'react';

export default class Facetitem extends Component {
    onClickitem(e, key) {
        this.props.handleClick(e, key)
    }
    render() {
        const key= this.props.name
        const data= this.props.data
        return (
            <li className="facet-item" key={key}>
                <a ref={key} onClick={(e) => this.onClickitem(e, key)}>
                    {key} <span>{data[key]}</span>
                </a>
            </li>
        )
    }
}