import React, { Component } from 'react'
import '../App.css'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,author,date,source} = this.props;

        return (
            <div >
                <div className="card newsItem my-3" >
                <img src={imageUrl} style={{height : '200px'}} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{left : '90%', zIndex : '1', top : '2%'}}>
                        {source}
                    </span>
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">{!author?"Unknown":author} | Updated: {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
