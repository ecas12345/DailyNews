import React from 'react';
import './Article.css';

const Article = (props) => {

    return (
        <div className="card center-text">
            <div className="showPicture">
                <img className="icon-img" src={props.image} alt={props.image}></img>
            </div>
            <div className="cont-section text">
                <span>
                    {props.source}
                    <hr className="hr-style"></hr>
                    {props.title}
                </span>
            </div>
            <a href={props.url}>
                <div className="overlay">
                    <div className="text">
                        {props.description}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Article;