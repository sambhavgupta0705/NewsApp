import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {

  static defaultProps={
    country:'in',
    pageSize:6,
    category:'general'

  }
  
capitalizeFirstLetter(str){
return str.charAt(0).toUpperCase() + str.slice(1);
}

// apiKey=process.env.REACT_APP_API_KEY
articles=[]
  constructor(props){

    super(props);
    console.log("hello");

    this.state  ={

      articles:this.articles,
      loading: false,
      page:1

    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;


  }
  async updateNews(pageNo){
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data=await fetch(url);
    let parsedData=await data.json(); 
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults:parsedData.totalResults
    })
  }

  async componentDidMount(){ 
    this.updateNews();


  }

  handlePrevClick=async()=>{
    
    this.setState({page:this.state.page-1})
    this.updateNews();

    
    
  }
  handleNextClick= async ()=>{
    

   
    this.setState({page:this.state.page+1})
    this.updateNews();
    
  }

  render() {
    console.log("hello")
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '40px 0px'}}>NewsMonkey-Top  {this.capitalizeFirstLetter(this.props.category)} Headlines  </h1>
        {/* <Spinner/> */}
      
        <div className="row">


        {this.state.articles.map((element)=>
        {
          return <div className="col-md-4">
            <NewsItem key={element.url} title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source ={element.source.name}/>
          </div>
          })}  
          <div>
            <div className="container d-flex justify-content-between" >
              <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevClick} class="btn btn-dark"> &larr; Previous</button>
           
            
              <button type="button" disabled= {this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize) }onClick={this.handleNextClick} class="btn btn-dark">Next &rarr; </button>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default News;
