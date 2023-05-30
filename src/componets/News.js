import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import SpinnerBar from './SpinnerBar'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function News (props) {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const updatePage = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=1483be2622ac49ff8dc53bf1c7b373f7&page=${page}&pageSize=${props.pageSize}`
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(60);
        setArticles(parseData.articles)
        setPage(page + 1)
        setTotalResults(parseData.totalResults)
        props.setProgress(100);
    }
    useEffect(() => {
        updatePage();

    }, [])


    const fetchMoreData = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=1483be2622ac49ff8dc53bf1c7b373f7&page=${page}&pageSize=${props.pageSize}`
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles))
        setPage(page + 1)
    }
    return (

        <>
            <h2 className='text-center'>DailyBuzz - Top Headlines [ {props.heading}] </h2>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<SpinnerBar />}

            ><div className="container"> <div className="row justify-content-center"> {


                articles.map((e) => {
                    console.log(e)
                    return <div key={e.url} className="col-3 mx-4 my-3">
                        <NewsItems title={e.title ? e.title.slice(0, 45) : "(no title)"} desc={e.description ? e.description.slice(0, 90) : "(no description)"} imageUrl={e.urlToImage ? e.urlToImage : "https://i.ytimg.com/vi/1Zv6peOteRY/maxresdefault.jpg"} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                    </div>

                })
            } </div>
                </div></InfiniteScroll>
        </>
    )

}
