import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class NewsComponent extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-4">
                This is my newsComponent
                <NewsItem  title='Cricket' description='All about cricket'/>
                <NewsItem/>
                <NewsItem/>
                </div>
                </div>
                <NewsItem/>
                <NewsItem/>
            </div>
        )
    }
}

export default NewsComponent
