import React, { Component } from "react";
import { unescape } from "lodash";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";
import { GlobalContext } from "./GlobalContext";

export default class SearchResults extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="search-results">
                    <Sidebar
                        facets={this.props.facets}
                        helper={this.props.helper}
                        catsList={this.props.catsList}
                    />
                    <div className="grid-wrapper">
                        {this.props.searchResults.map((item, index) => {
                            return (
                                <div className="grid-item" key={index}>
                                    <img src={item.image} alt={item.name} className="app-image"/>
                                    <div className="app-info">
                                        <a href={item.link}>
                                            <p
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        item._highlightResult.name
                                                            .value
                                                }}
                                            />
                                        </a>
                                        <p>{unescape(item.category)}</p>
                                    </div>
                                </div>
                            );
                        })}
                        <GlobalContext.Consumer>
                        {context => (
                            <Pagination
                            allPages={this.props.pages}
                            currentPage={this.props.page}
                            helper={context.helper}
                            />
                        )}
                        </GlobalContext.Consumer>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
}
