import React, { Component } from 'react';
import axios from 'axios';
import Article from './Articles/Article';

import './News.css';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsPosts: [],
            searchQuery: ""
        }
        this.updateSearchParam = this.updateSearchParam.bind(this);
        this.getSearchedArticle = this.getSearchedArticle.bind(this);
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=3c29ead9e4864c20b71d794ed8359ebf')
            .then(response => {
                this.setState({
                    newsPosts: response.data.articles
                })
            })
        }

    updateSearchParam(event) {
        this.setState({
            searchQuery: event.target.value
        })
    }
    getSearchedArticle() {
        axios.get('https://newsapi.org/v2/everything?q=' + this.state.searchQuery + '&apiKey=3c29ead9e4864c20b71d794ed8359ebf')
            .then(response => {
                this.setState({
                    newsPosts: response.data.articles
                })
            }
        )
    }


    render() {

        const newsArticles = this.state.newsPosts.map(newsPost => {
            return <Article
                key={newsPost.id}
                source={newsPost.source.name}
                title={newsPost.title}
                url={newsPost.url}
                image={newsPost.urlToImage}
                description={newsPost.description} />

        })
        return (
            <div>
                <div className="header-bar">
                    <div className="header-content">
                        <span>Daily News</span>
                        <span className="search">
                            <input type="text" className="search-input" placeholder="Search for anything" onChange={this.updateSearchParam}></input>
                            <button type="button" className="search-button" onClick={this.getSearchedArticle}>Search</button>
                        </span>
                    </div>
                </div>
                <div className="my-container">
                    {newsArticles}
                </div>
            </div>
        )
    }
}

export default News;