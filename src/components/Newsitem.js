import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%'}}>
                        {source}
                    </span>
                    <img src={imageUrl ? imageUrl : "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title ">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>

                        <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem