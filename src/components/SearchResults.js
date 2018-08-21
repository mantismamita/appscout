import React, { Component } from 'react'
import { unescape } from 'lodash'
import Sidebar from './Sidebar'
//import Pagination from './Pagination';

export default class SearchResults extends Component {
    handleChange(e){
      console.log(e.target.value)
    }

    componentWillMount(){
      console.log('Searchresults mounted')
    }

    render() {
        //const {details, index} = this.props.searchResults
        
        return (
          <React.Fragment>
          <div className="search-results">
            <Sidebar 
                facets={ this.props.facets }
                helper={ this.props.helper }
                />
            <div className="grid-wrapper">
                {this.props.searchResults.map((item, index) => {
                    return (
                    <div className="grid-item" key={index}>
                    <img src={item.image} alt=""/>
                    <p dangerouslySetInnerHTML={{ __html:item._highlightResult.name.value }} />
                    <p>{ unescape(item.category) }</p>
                    </div>
                    )
                })}
            </div>
          </div>
          {/* 

            <div className="grid-wrapper">
              {this.props.searchResults.map((item, index) => {
                  return (
                    <div className="grid-item" key={index}>
                    <img src={this.props.imgRoot + item.poster_path} alt=""/>
                    <p>{item.original_title}</p>
                    </div>
                  )
                })}
            </div>
            <Pagination allPages={ this.props.pages } page={ this.props.page }/>
          */}  
          </React.Fragment>
        );
      }
}