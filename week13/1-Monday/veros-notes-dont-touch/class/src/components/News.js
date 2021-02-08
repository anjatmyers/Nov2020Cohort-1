import React, { Component } from "react";

class News extends Component {

    constructor() {
        super();

        // console.log('constructor');

        this.state ={
            articles: [],
            searchResults: ''
        }
    }

    
    componentDidMount = async ()=> {
       
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0cf790498275413a9247f8b94b3843fd"

        let response = await fetch(url);

        let data = await response.json();

        this.setState({
            articles: data.articles
        }, ()=>{

             console.log(this.state.articles);

        })

        //after

    }

    handleInput = (event) => {
      this.setState({
          searchResults: event.target.value
      })
    }
    

  render() {
   
    const {articles, searchResults} = this.state;

    let filteredList = articles.filter(articleObj =>{

        return articleObj.title.toLowerCase().includes(searchResults.toLowerCase());
    })

    let articleList = filteredList.map((article, index) =>{
        return <li key={index}>
            <h4>{article.title}</h4>
            <img src={article.urlToImage} alt=""/>
            <p>{article.description}</p>
        </li>
    })

    return <>

        <h1>News Articles</h1>

        <input type="text" value={searchResults} onChange={this.handleInput} />

        {articleList}
    </>
  }
}

export default News;
