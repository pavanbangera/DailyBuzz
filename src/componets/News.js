import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
    constructor () {
        super()
        this.state = {
            articles: [],
            page: 1,

        }
    }
    async componentDidMount () {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1483be2622ac49ff8dc53bf1c7b373f7&page=1&pageSize=18`
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalResult: parseData.totalResults
        })
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1483be2622ac49ff8dc53bf1c7b373f7&page=${this.state.page - 1}&pageSize=18`
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1
        })

    }
    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResult / 18)) {
            document.getElementById("next").setAttribute("disabled", "");

        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=1483be2622ac49ff8dc53bf1c7b373f7&page=${this.state.page + 1}&pageSize=18`
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                articles: parseData.articles,
                page: this.state.page + 1
            })
        }

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
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} class="btn btn-primary" onClick={this.handlePrevClick}>&larr; Preview</button>
                    <button class="btn btn-primary" id="next" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
