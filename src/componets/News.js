import React, { Component } from 'react'
import NewsItems from './NewsItems'
import SpinnerBar from './SpinnerBar'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    constructor () {
        super()
        this.state = {
            articles: [],
            page: 1,
            // loading: true,

        }
    }
    // updatePage = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=1483be2622ac49ff8dc53bf1c7b373f7&page=${this.state.page}&pageSize=${this.props.pageSize}`
    //     this.setState({ loading: true })
    //     let data = await fetch(url);
    //     let parseData = await data.json();
    //     this.setState({
    //         articles: parseData.articles,
    //         totalResult: parseData.totalResults,
    //         loading: false
    //     })
    // }
    async componentDidMount () {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=1483be2622ac49ff8dc53bf1c7b373f7&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        this.props.setProgress(30);
        let parseData = await data.json();
        this.props.setProgress(60);
        this.setState({
            articles: parseData.articles,
            totalResult: parseData.totalResults,
            page: this.state.page + 1,


        })
        this.props.setProgress(100);
    }
    // handlePrevClick = async () => {
    //     await this.setState({
    //         page: this.state.page - 1,
    //     })
    //     await this.updatePage()

    // }
    // handleNextClick = async () => {
    //     await this.setState({
    //         page: this.state.page + 1,
    //     })
    //     await this.updatePage()
    // }
    fetchMoreData = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=1483be2622ac49ff8dc53bf1c7b373f7&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResult: parseData.totalResults,
            page: this.state.page + 1,
        })
    }
    render () {
        return (

            <>
                <h2 className='text-center'>DailyBuzz - Top Headlines [ {this.props.heading}] </h2>

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResult}
                    loader={<SpinnerBar />}

                ><div className="container"> <div className="row justify-content-center"> {


                    this.state.articles.map((e) => {
                        console.log(e)
                        return <div key={e.url} className="col-3 mx-4 my-3">
                            <NewsItems title={e.title ? e.title.slice(0, 45) : "(no title)"} desc={e.description ? e.description.slice(0, 90) : "(no description)"} imageUrl={e.urlToImage ? e.urlToImage : "https://i.ytimg.com/vi/1Zv6peOteRY/maxresdefault.jpg"} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                        </div>

                    })
                } </div>
                    </div></InfiniteScroll>


                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} class="btn btn-primary" onClick={this.handlePrevClick}>&larr; Preview</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / 18)} class="btn btn-primary" id="next" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}
