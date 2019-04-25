import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.scss';
import MainNavbar from '../MainNavbar';
import { 
    search, 
    inputQuery, 
    switchSearchType,
    nextPage,
    prevPage 
} from '../../store/actions/app';
import ContentItem from './ContentItem';
import TypeSwitcher from './TypeSwitcher';
import { getGenres } from '../../utilits';

class SearchResults extends Component {

    componentDidMount() {
        if(!this.props.query) {
            const query = this.props.location.pathname.split('/')[2];
            this.props.inputQuery(query);
        }

        this.props.search(this.props.query);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.query !== this.props.query) {
            this.props.search();
        } else if(prevProps.page !== this.props.page) {
            this.props.search();
        }
    }

    switchSearchType = () => {
        this.props.switchSearchType();
        this.props.search();
    }
    

    render() {
        let output = null;

        if(!this.props.loading && !this.props.configurationLoading) {
            
            const { base_url, poster_sizes } = this.props.configuration.images;
            output = (
                <div className="search-results">
                    <h2>search results for "{this.props.query}"</h2>
                    <TypeSwitcher 
                        switchSearchType={this.switchSearchType}
                        type={this.props.searchType}
                    />
                    <div className="search-results_list">
                        {
                            this.props.results.length > 0 ?
                            this.props.results.map((content, index) => {
                                if(content.poster_path) {
                                    return (
                                        <ContentItem 
                                            genres={getGenres(this.props.genres, content.genre_ids).slice(0, 2)}
                                            key={content.id}
                                            type={this.props.searchType}
                                            baseUrl={base_url + poster_sizes[1]}
                                            {...content}
                                        />
                                    );
                                }

                                return null;
                            }) :
                            <div className="search-results_not-found">no results found</div>
                        }
                    </div>
                </div>
            );
        }

        return (
            <React.Fragment>
                <MainNavbar />
                {output}
                <div className="search-results_page-buttons">
                    <button 
                        onClick={this.props.prevPage}
                        disabled={this.props.page === 1} 
                        className={this.props.page === 1 ? 'disabled' : null}
                    >prev</button>
                    <button
                        disabled={this.props.results.length < 20}
                        className={this.props.results.length < 20 ? 'disabled' : null}
                        onClick={this.props.nextPage}
                    >next</button>
                </div>
            </React.Fragment>
        );
    }
}

const dispatchs = {
    search, inputQuery, switchSearchType,
    nextPage, prevPage
}

export default connect( state => ({
    results: state.app.searchResults,
    query: state.app.searchQuery,
    loading: state.app.searchLoading,
    configurationLoading: state.app.configurationLoading,
    searchType: state.app.searchType,
    configuration: state.app.configuration,
    genres: state.app.genres,
    page: state.app.searchPage
}), dispatchs )(SearchResults);
