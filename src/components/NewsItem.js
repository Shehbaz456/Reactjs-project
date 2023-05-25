import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl,author,date}=this.props
    return (
      <div className="my-3  m-2">
        <div className="card">
  <img src={!imageUrl?"https://imgeng.jagran.com/images/2023/may/wwdc%2020231684416004507.jpg": imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}...</p>
    <p className='card-text'><small className='text-danger'>By {!author?"Unknown":author} on {new Date(date).toGMTString()} </small></p>
    <a rel="noreferrer"  href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

// dixitarchana@gmail
