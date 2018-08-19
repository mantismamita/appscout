import React, { Component }  from 'react';

class SearchBar extends Component {
  handleChange(e){
    console.log(e.target.value)
  }

  render(){
    return(
      <div className="search-bar">
        <input 
          onChange={ e => this.onInputChange(e.target.value) }
          placeholder='Find an app' />
      </div>      
    )
  }

  onInputChange(term){
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar;
