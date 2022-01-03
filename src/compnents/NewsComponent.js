import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class NewsComponent extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbb13c851680451382ecaafefbba9a54&page=1&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data = await fetch(url)
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
            articles: parseData.articles,
            totalResults:parseData.totalResults,
            loading: false
        })
  }

//   pageHandler = (event) =>{
//     this.setState({
//         page: (event.target.value) 
//     })
//     this.clickNextHandler()
//     console.log(this.state.page);
//   }

  clickPrevHandler = async() =>{

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbb13c851680451382ecaafefbba9a54&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
        page : this.state.page - 1,
        articles: parseData.articles,
        loading:false
    })
    console.log(this.state.page);

}  

clickNextHandler = async() =>{
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbb13c851680451382ecaafefbba9a54&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parseData = await data.json();
        console.log(parseData);
    this.setState({
        page : this.state.page + 1,
        articles: parseData.articles,
        loading: false
    })
    console.log(this.state.page);

}
}   
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Top Headlines - {this.props.category[0].toUpperCase() + this.props.category.slice(1)}</h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title.slice(0, 50):""}
                  description={element.description?element.description.slice(0,100):""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.clickPrevHandler}>	&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.clickNextHandler}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default NewsComponent;
