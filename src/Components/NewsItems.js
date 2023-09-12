import React from "react";

const NewsItems = (props) => {
    let {title, author, publishedAt, source, description, imageURL,newsUrl} = props;
    return (
      <div>
        <div className="card">
            <div style = { {display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'} }>
              <span className="badge rounded-pill bg-danger">
                {source}
              </span>
            </div>
          <img src={!imageURL?'https://uploads-ssl.webflow.com/617feb22d6841a844b818083/62a09e7c69ab0c527f15618b_newsmonkey_logo.png':imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">By {!author?"Unknown":author} on {new Date(publishedAt).toGMTString()} </p>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItems
