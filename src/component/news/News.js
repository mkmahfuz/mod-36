import React, { useEffect, useState } from 'react';
import { CardColumns, CardDeck } from 'react-bootstrap';
import Article from '../Article/Article';

const News = () => {
    const [articles,setArticles] = useState([]);
    useEffect(()=>{
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=36d401bcd6d842d18ed00d07d9aa094d')
        .then(res=>res.json())
        .then(data=>setArticles(data.articles))
        .catch((e)=>console.log('e.message'))
    },[]);
    
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