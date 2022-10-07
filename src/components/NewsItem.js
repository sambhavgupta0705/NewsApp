import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";
// import NewsItem


export class NewsItem extends Component {
  

  render() {
    let {title,description,imageUrl,newsUrl,author,date ,source}=this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={! imageUrl?"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg":imageUrl} className="card-img-top" alt="..." /><span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
    {source}
  </span>
          <div className="card-body">
            <h5 className="card-title">{title}  </h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small class="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
