import { useParams } from 'react-router-dom'
import React from 'react'
import { useEffect, useState } from 'react';
// import news from '../data/news.json'
import NewsCard from '../components/NewsCard'

function CategoryPage() {

  const containerStyle = {
    padding: "16px",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    textTransform: "capitalize",
    marginBottom: "16px",
    paddingBottom: "8px",
    borderBottom: "2px solid #ccc",
  };

  const gridStyle = {
    display: "grid",
    gap: "16px",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  };

  const noNewsStyle = {
    color: "red",
    fontSize: "18px",
  };



  const { type } = useParams()

// start
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`https://news-website-backend-qrpr.onrender.com/api/news/type/${type}`)
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error("Error loading category:", err));
  }, [type]);


// end



  const filteredNews = news.filter(item => item.newsType.toLowerCase() === type.toLowerCase())

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{type} News</h1>
      {filteredNews.length > 0 ? (
        <div style={gridStyle}>
          {filteredNews.map(item => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      ) : (
        <p style={noNewsStyle}>No news found in this category.</p>
      )}
    </div>
  )
}

export default CategoryPage
