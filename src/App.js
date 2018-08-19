import React, { Component } from 'react'
import SearchBar from './components/Searchbar'
import SearchResults from './components/SearchResults'
import { debounce } from 'lodash'
var algoliasearch = require('algoliasearch');
var algoliasearchHelper = require('algoliasearch-helper');

class App extends Component {

    constructor(props) {
        super(props)
        this.state = { 
          allApps: [],
          term: ''
        }
    }

    loadSearchResults = (term) => {
        console.log(term)
        // const sr = document.querySelector('.search-results')
        // if(sr.classList.contains('hide')) {
        //     sr.classList.remove('hide')
        // }
          
        // QuerySearch( term, (results, pages, page) => {
        //     this.setState({
        //         searchResults: results,
        //         searchResultsPages: pages,
        //         searchResultsCurrentPage: page,
        //         term: term
        //     })
        // })  
    }

    conductSearch = (term) => {
        const client = algoliasearch('TW3Q3EK1Z6', '134f4ea451d2fd5356c794ea589dbb52' )
        const helper = algoliasearchHelper(client, 'app_scout', 
        {
            facets: ['name', 'rank'],
            disjunctiveFacets: ['category'],
            hitsPerPage: 10,
            maxValuesPerFacet: 10,
            getRankingInfo: true
          });

        helper.on('result', (content) => {
            if (content.length === 0) {
                // If there is no result we display a friendly message
                // instead of an empty page.
                console.warn('no hits')
                return
            }
            this.setState({
                allApps: content,
                term 
            })
        });
    }

    renderHits = (content) => {
        
        const client = algoliasearch('TW3Q3EK1Z6', '134f4ea451d2fd5356c794ea589dbb52' )
        const helper = algoliasearchHelper(client, 'app_scout', 
        {
            facets: ['name', 'rank'],
            disjunctiveFacets: ['category'],
            hitsPerPage: 10,
            maxValuesPerFacet: 10,
            getRankingInfo: true
          });

        helper.on('result', (content) => {
            if (content.length === 0) {
                // If there is no result we display a friendly message
                // instead of an empty page.
                console.warn('no hits')
                return
            }
            console.log(content);
        });
    }


  render() {
    //const submitQuery = debounce((term) => {this.renderHits(term)}, 1000)

    return (
      <div className="appscout">
        <header className="appscout-header">
          <h1 className="appscout-title">App Scout</h1>
        </header>
        <SearchBar 
          term={ this.state.term }
          onSearchTermChange={ this.conductSearch(this.state.term) }
          />
          <SearchResults />
      </div>
    )
  }
}

export default App;
