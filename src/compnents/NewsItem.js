import React, { Component } from 'react'
import '../App.css'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl} = this.props;

        return (
            <div >
                <div className="card newsItem my-3" >
                <img src={imageUrl} style={{height : '200px'}} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
