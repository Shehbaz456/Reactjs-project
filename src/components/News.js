import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  static defaultProps = {
    country:'in',
    pageSize:6,
    category: "general",
  }
  static propsTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string,  
  }
  capitalizeFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  constructor(props){
    super(props);
    console.log("hello constructor from news components");
    this.state = {
      articles: [],
      loading: true,
      page:1,
      totalResults: 0
    }
    document.title =`${this.capitalizeFirstLetter(this.props.category)} - NewsWave`
  }
   
  async updatedNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94b536f877744890b4d6f0e03284bbe8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    this.props.setProgress(100);
  }

  async componentDidMount(){
    this.updatedNews();
  } 

    handlePrevClick =  async()=>{
        console.log("Previous");
        this.setState({page:this.state.page-1})
        this.updatedNews()
    }
    handleNextClick = async()=>{
        console.log("Next");
        this.setState({page:this.state.page+1})
        this.updatedNews()
    }

    fetchMoreData = async() => {
      this.setState({page:this.state.page+1})
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=94b536f877744890b4d6f0e03284bbe8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults})
    };

  render() {
    return (
      <div className='container my-3'> 
      <h1 className="text-center">NewsWave - top {this.capitalizeFirstLetter(this.props.category)} headline</h1>
     {this.state.loading && <Spinner/>}

     <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={!<Spinner/>?<Spinner/>:""}
        >
        <div className="container">
      <div className="row">
      {this.state.articles.map((element)=>{
       return  <div className="col-md-4" key={element.url}>
        <NewsItem  title={element.title?element.title:""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage}  newsUrl={element.url} author={element.author} date ={element.publishedAt} />
        </div>
      })}
      </div>
      </div>
      </InfiniteScroll>

      </div>
    )
  }
}




// https://youtu.be/sUGwamqnJnY
// btn previous and next
// {/* <div className="container d-flex justify-content-between">
// <button disabled={this.state.page<=1} type="button" class="btn btn-danger"  onClick={this.handlePrevClick}> &#8592; Previous</button>
// <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-danger" onClick={this.handleNextClick}>Next &rarr;</button>
// </div> */}
