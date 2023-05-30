import React, { Component } from 'react'

export default class NewsItems extends Component {
    render () {
        let { title, desc, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="card" style={{ width: "18rem" }}>
                <img src={imageUrl} className="card-img-top" style={{ width: "100%", height: "10rem" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...<span class="badge bg-secondary">{source}</span></h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text">By- {author ? author : "unknow"} on {new Date(date).toUTCString()}</p>
                    <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Read</a>
                </div>
            </div>
        )
    }
}
