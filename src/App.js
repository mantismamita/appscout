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
          searchResults: [],
          allCats: [],
          facets: [],
          term: ''
        }
        this.conductSearch = this.conductSearch.bind(this)
        this.renderHits = this.renderHits.bind(this)
        this.client = algoliasearch('TW3Q3EK1Z6', '134f4ea451d2fd5356c794ea589dbb52' )
        this.helper = algoliasearchHelper(this.client, 'app_scout', {
                facets: ['category']
        })
    }
    componentDidMount() {  
        this.helper.on('result', (results) => {
            if (results.length === 0) {
                console.warn('no hits')
                return
            }

            this.setState({
                searchResults: results.hits,
                facets: results.facets,
            })
            console.log('componentDidMount called from App.js')
        })

        this.helper.search()
    }

    conductSearch(term) {
        this.helper.on('result', (results) => {
            if (results.length === 0) {
                console.warn('no hits')
                return
            }
            this.setState({
                searchResults: results.hits,
                facets: results.facets,
                term 
            })
            this.renderHits(results)
        });

        this.helper.setQuery(term).search()
    }

    renderHits(results) {
        console.warn(results)
    }


  render() {
    const submitQuery = debounce((term) => {this.conductSearch(term)}, 1000)

    return (
      <div className="appscout">
        <header className="appscout-header">
          <h1 className="appscout-title">App Scout</h1>
        </header>
        <SearchBar 
          term={ this.state.term }
          onSearchTermChange={ submitQuery }
          />
        <SearchResults
          searchResults={ this.state.searchResults } 
          facets={ this.state.facets }
          helper={this.helper}
          />
      </div>
    )
  }
}

export default App;
