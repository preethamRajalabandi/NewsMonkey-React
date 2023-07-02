import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Hollywood actors extend contract talks, temporarily averting strike",
            "description": "Hollywood's actors union and major Hollywood studios agreed on Friday to keep negotiating through mid-July, staving off the immediate threat of a second labor strike in the entertainment business this summer.",
            "url": "https://www.reuters.com/world/us/hollywood-faces-possible-second-strike-actors-talks-near-deadline-2023-06-30/",
            "urlToImage": "https://www.reuters.com/resizer/rFHIq0GmCA1pqB8UWyWBSweb30g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/J3PNOIJMWJL5XAY5PXNC7PCG3E.jpg",
            "publishedAt": "2023-07-01T03:19:05Z",
            "content": "LOS ANGELES, June 30 (Reuters) - Hollywood's actors union and major Hollywood studios agreed on Friday to keep negotiating through mid-July, staving off the immediate threat of a second labor strike … [+3167 chars]"
        },
        {
            "source": {
                "id": "polygon",
                "name": "Polygon"
            },
            "author": "Michael McWhertor",
            "title": "Lord of the Rings: Gollum developer shuts down, scraps new LOTR game",
            "description": "Gollum publisher Daedalic Entertainment confirms closure of its internal development department and the cancellation of a second The Lord of the Rings game.",
            "url": "https://www.polygon.com/23780172/lord-rings-gollum-daedalic-lotr-game-canceled",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/4KtAGD2ro18nJ_soS0T01iikQXk=/0x0:1920x1005/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24763620/gollum_2.jpg",
            "publishedAt": "2023-06-30T18:21:42Z",
            "content": "Publisher Daedalic Entertainment is closing the Hamburg, Germany-based internal studio that made The Lord of the Rings: Gollum, and has ended development on a second project based on the Lord of the … [+2555 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Cameron Temple",
            "title": "Eddie Hearn ‘very confident’ Anthony Joshua vs Deontay Wilder will get made after Saudi meeting...",
            "description": "Eddie Hearn has held further talks with Saudi Arabian representatives over hosting Anthony Joshua vs Deontay Wilder. Saudi Arabia-based promotional company Skills Challenge Entertainment want to ho…",
            "url": "https://talksport.com/sport/boxing/1484622/eddie-hearn-anthony-joshua-vs-deontay-wilder-saudi-arabia/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2019/03/TALKSPORT-HEARN-WILDER-JOSHUA.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2023-06-30T13:58:28Z",
            "content": "Eddie Hearn has held further talks with Saudi Arabian representatives over hosting Anthony Joshua vs Deontay Wilder. \r\nSaudi Arabia-based promotional company Skills Challenge Entertainment want to ho… [+1525 chars]"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": null,
            "title": "Big News For Harley Quinn on HBO Max - IGN The Fix: Entertainment - IGN",
            "description": "<section class=\"video-page\"><p>Harley Quinn season 4 is coming to HBO Max, and fans of the DC animated series are excited. In the wake of a bunch of canceled animated shows, #HBOMax is showing some favor to a special malet-wielding, pigtailed deviant named #H…",
            "url": "https://www.ign.com/videos/big-news-for-harley-quinn-on-hbo-max-ign-the-fix-entertainment",
            "urlToImage": "https://assets-prd.ignimgs.com/2022/08/31/efix-083122-blogroll-1661978432833.jpg?width=1280",
            "publishedAt": "2022-09-01T17:52:24.9579624Z",
            "content": "Harley Quinn season 4 is coming to HBO Max, and fans of the DC animated series are excited. In the wake of a bunch of canceled animated shows, #HBOMax is showing some favor to a special malet-wieldin… [+239 chars]"
        },
        {
            "source": {
                "id": "the-lad-bible",
                "name": "The Lad Bible"
            },
            "author": null,
            "title": "Breaking Entertainment News - Celebrity & Showbiz News | LADbible",
            "description": "The latest entertainment news in the UK and worldwide on LADbible. We cover breaking celebrity news and showbiz stories. Check out our exclusives.",
            "url": "https://www.theladbible.com/entertainment",
            "urlToImage": null,
            "publishedAt": "2020-06-18T14:07:50.1068606Z",
            "content": "Netflix's new fantasy show, Cursed, will launch on 17 July"
        }
    ]
    constructor() {
        super();
        console.log("Hello I am construtor from News component");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <Newsitem title='myTitle' description='mydesc' imageUrl="https://www.reuters.com/resizer/rFHIq0GmCA1pqB8UWyWBSweb30g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/J3PNOIJMWJL5XAY5PXNC7PCG3E.jpg" newsUrl="TODO"/>
                    </div>
                    <div className="col-md-4">
                        <Newsitem title='myTitle' description='mydesc' />
                    </div>
                    <div className="col-md-4">
                        <Newsitem title='myTitle' description='mydesc' />
                    </div>
                </div>
            </div>
        )
    }
}

export default News