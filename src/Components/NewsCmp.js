import React, { useState, useEffect} from "react";
import NewsItems from "./NewsItems";
import Spinner from "./spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const NewsCmp  = (props) => {
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)

  const updateNews = async () => {
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100)
  }

  useEffect(() => {
    document.title = `NewsMonkey - ${props.category}`
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

    return (
      <>
        <h2 className="text-center" style={{marginTop: '72px'}}>NewsMonkey - Top {props.category} Headlines</h2>
        {loading && <Spinner/>}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
            <div className="row my-2">
              {articles.map((element,index) => {
                return (
                  <div className="col-md-4 my-2" key={index}>
                    <NewsItems
                      title={element.title?element.title:""}
                      author={element.author}
                      source={element.source.name}
                      publishedAt={element.publishedAt}
                      description={element.description?element.description:""}
                      imageURL={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
          
      </>
      
    );
}

NewsCmp.defaultProps = {
  country: 'in',
  pageSize: 8,
  category:'general'
}

NewsCmp.propsTypes = {
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default NewsCmp