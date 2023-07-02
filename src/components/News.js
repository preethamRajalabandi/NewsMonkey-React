import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "France riots: French minister Gérald Darmanin plays down latest unrest",
            "description": "Interior Minister Gérald Darmanin says there has been a \"downturn\", but hundreds more people are arrested.",
            "url": "http://www.bbc.co.uk/news/live/world-europe-66073728",
            "urlToImage": "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
            "publishedAt": "2023-07-01T02:52:20.245885Z",
            "content": "Hello and welcome\r\nto our continued live coverage of the riots in France.\r\nWidespread chaos\r\nhas been reported in cities across France overnight, with some 471 arrests this\r\nevening, according to the… [+464 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Florida murder suspect arrested after 40 years",
            "description": "Police say the suspect featured thrice on America's Most Wanted and used 13 aliases to evade arrest.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-66073441",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2EC7/production/_130257911_donald.png",
            "publishedAt": "2023-07-01T02:07:24.1999232Z",
            "content": "A Florida murder suspect who featured thrice on America's Most Wanted was arrested after nearly four decades on the run.\r\nDonald Santini, 65, allegedly used 13 aliases to evade arrest for the 1984 mu… [+2230 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Sex life of rare 'leopard-print' frog revealed",
            "description": "An all-female team tracked it down amid deadly snakes and 50C heat in a forest known as 'hell on Earth'.",
            "url": "http://www.bbc.co.uk/news/science-environment-66001590",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1764/production/_130188950_4.santafefrog-phisisibez.jpg",
            "publishedAt": "2023-07-01T02:07:23.7781525Z",
            "content": "An all-female team has braved 50C heat and poisonous snakes to track down a \"leopard-print\" frog virtually unknown to science and learn how it reproduces.\r\nThe Argentinian conservation scientists are… [+3359 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "MDMA: Australia begins world-first psychedelic therapy",
            "description": "The drug and a key ingredient in magic mushrooms will be used nationally to treat PTSD and depression.",
            "url": "http://www.bbc.co.uk/news/world-australia-66049989",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/143BA/production/_130247828_gettyimages-886138562.jpg",
            "publishedAt": "2023-07-01T02:07:21.4336953Z",
            "content": "Earlier this year, researchers raised eyebrows when Australia's traditionally conservative medicines regulator approved the use of psychedelics to assist therapy sessions.\r\nThe decision will see psil… [+6953 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Deciphering Vladimir Putin's many appearances since mutiny",
            "description": "The Russian president has popped up on TV screens multiple times since last weekend's dramatic events - but to what end?",
            "url": "http://www.bbc.co.uk/news/world-europe-66065551",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/EED9/production/_130254116_c786c9865b2da38dbdd84366b9b8779bc4d42b340_0_3613_25681000x711.jpg",
            "publishedAt": "2023-07-01T00:07:17.7302661Z",
            "content": "Media caption, Watch: Three key moments from Putin's unusual week\r\nWhere's Vladimir Putin? That's what we were wondering most of Monday - two days after a dramatic insurrection by the Wagner Group th… [+7655 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "France riots: Nanterre rocked by killing and unrest",
            "description": "The town of Nanterre is shaken by nights of rioting after 17-year-old Nahel was shot by police.",
            "url": "http://www.bbc.co.uk/news/world-europe-66070033",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0B3B/production/_130257820_23e3a31c9fe7e468e20c45843e4c0aede2f954b90_315_4724_26591000x563.jpg",
            "publishedAt": "2023-07-01T00:07:15.7620058Z",
            "content": "Come to Nanterre to get an all-round view of the crisis boiling over in France. But if you are a journalist, be advised to keep your head down. \r\nAn approach to a group of young men - some bearded, o… [+7014 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "Scorching heat fuels calls for worker protections",
            "description": "A punishing heat wave in parts of the US has claimed the lives of at least a dozen people.",
            "url": "http://www.bbc.co.uk/news/business-66070216",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10027/production/_130257556_whatsubject.jpg",
            "publishedAt": "2023-06-30T23:07:23.0587037Z",
            "content": "Worker advocates in the US are renewing calls for protections from extreme temperatures, amid a heat wave that has claimed the lives of at least a dozen people. \r\nCities including Las Vegas and Phoen… [+5232 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "The Supreme Court flexed its conservative muscles. What comes next?",
            "description": "This week's flurry of decisions showed the sharp divides between the conservative and liberal judges.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-66061849",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/17C05/production/_130258279_supremecourt.jpg",
            "publishedAt": "2023-06-30T21:37:19.4838063Z",
            "content": "The Supreme Court ended its term this week with a flurry of decisions that underlined the sharp political and ideological divides between the six conservative judges and their three liberal counterpa… [+3512 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "US Supreme Court rules website designer can refuse to serve same-sex couples",
            "description": "The decision means states cannot compel artists to express messages against their religious beliefs.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-66070534",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/FEA5/production/_127898156_gettyimages-1245373644.jpg",
            "publishedAt": "2023-06-30T17:37:22.0908765Z",
            "content": "The US Supreme Court has ruled in favour of a graphic designer who has refused to create wedding websites for same-sex couples.\r\nLorie Smith, from Colorado, argued she could not serve same-sex couple… [+3542 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "BBC News",
            "title": "US Supreme Court strikes down student loan forgiveness plan",
            "description": "The decision means Joe Biden's proposal to wipe out billions in student debt is effectively axed.",
            "url": "http://www.bbc.co.uk/news/world-us-canada-65931653",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9BAA/production/_128805893_gettyimages-1247556593.jpg",
            "publishedAt": "2023-06-30T17:22:21.4492709Z",
            "content": "The US Supreme Court has struck down US President Joe Biden's proposal to wipe out billions in student debt. \r\nThe 6-3 ruling effectively cancels the plan, which would have forgiven about $10,000 (£7… [+4498 chars]"
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
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News