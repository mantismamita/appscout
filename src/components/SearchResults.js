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
        
        return (
          <React.Fragment>
          <div className="search-results">
            <Sidebar 
                facets={ this.props.facets }
                helper={ this.props.helper }
                catsList={ this.props.catsList }
                />
            <div className="grid-wrapper">
                {this.props.searchResults.map((item, index) => {
                    return (
                    <div className="grid-item" key={index}>
                    <img src={item.image} alt={item.name}/>
                    <a href={item.link}><p dangerouslySetInnerHTML={{ __html:item._highlightResult.name.value }} /></a>
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