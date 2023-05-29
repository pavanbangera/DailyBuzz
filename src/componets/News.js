import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
    constructor () {
        super()
        this.state = {
            articles: []
        }
    }
    async componentDidMount () {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1483be2622ac49ff8dc53bf1c7b373f7"
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles
        })
    }
    render () {
        return (

            <div className='container my-3'>
                <h2 className='text-center'>DailyBuzz - Top Headlines </h2>
                <div className="row justify-content-center">
                    {

                        this.state.articles.map((e) => {
                            console.log(e)
                            return <div key={e.url} className="col-3 mx-4 my-3">
                                <NewsItems title={e.title ? e.title.slice(0, 45) : "(no title)"} desc={e.description ? e.description.slice(0, 90) : "(no description)"} imageUrl={e.urlToImage ? e.urlToImage : "https://i.ytimg.com/vi/1Zv6peOteRY/maxresdefault.jpg"} newsUrl={e.url} />
                            </div>

                        })
                    }

                </div>
            </div>
        )
    }
}
