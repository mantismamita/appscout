import React, { Component }  from 'react';

class SearchBar extends Component {
  onInputChange(term){
    this.props.onSearchTermChange(term)
  }

  render(){
    return(
      <div className="search-bar">
        <input 
          autoComplete="off"
          onKeyUp={ e => this.onInputChange(e.target.value) }
          placeholder='Find an app' />
      </div>      
    )
  }

}

export default SearchBar;
