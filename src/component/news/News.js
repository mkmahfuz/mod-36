import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CardColumns, CardDeck } from 'react-bootstrap';
import Article from '../Article/Article';

const News = () => {
    const [articles,setArticles] = useState([]);
    const url='https://newsapi.org/v2/top-headlines?country=us&apiKey=36d401bcd6d842d18ed00d07d9aa094d';
    //using only fetch
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(dataf=>console.log(dataf))
        // .then(data=>setArticles(data.articles))
        .catch((e)=>console.log('e.message'))
    },[]);
    //using axios already done $ npm install axios
    useEffect(()=>
    axios(url)
    // .then(dataax=>console.log(dataax))
    .then(dataax=>setArticles(dataax.data.articles))
        ,[]);

    //const articles = news.articles;

    return (
        <CardColumns>
            {
                // console.log(articles.length)
                articles.map((article,indx)=><Article key={indx} article={article}></Article>)
            }
       </CardColumns>
    );
};

export default News