import React, { Component } from 'react';
//import Pagination from './Pagination';

export default class SearchResults extends Component {
    handleChange(e){
      console.log(e.target.value)
    }

    componentWillMount(){
      console.log('Searchresults mounted')
    }

    // formatYear(date){
    //   const year = date !== '' ? new Date(date).getFullYear() : 'pas de date'
    //   return(
    //     year
    //   )
    // }
  
    render() {
        //const {details, index} = this.props.searchResults
        
        return (
          <React.Fragment>
          <div className="grid-wrapper search-results">
          </div>
          {/* 
            Multi
            line
            comment
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