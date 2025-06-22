/*


import { useParams } from 'react-router-dom'
// import news from '../data/news.json'
import React from 'react'
import { useEffect, useState } from 'react';

function NewsPage() {
  const containerStyle = {
    padding: "16px",
    maxWidth: "900px",
    margin: "auto",
    background: "white",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  };

  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "16px",
    marginBottom: "8px",
  };

  const metaStyle = {
    color: "gray",
    fontSize: "14px",
    marginBottom: "16px",
  };

  const contentStyle = {
    fontSize: "18px",
    color: "#333",
    whiteSpace: "pre-line",
    marginBottom: "16px",
  };

  const hashtagStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  };

  const tagStyle = {
    backgroundColor: "#cce5ff",
    color: "#0056b3",
    padding: "6px 12px",
    borderRadius: "4px",
    fontSize: "14px",
  };




  const { id } = useParams()

// start

  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/news/${id}`)
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error("Error fetching news:", err));
  }, [id]);


// end 
  const article = news.find(item => item.id === id)

  if (!article) {
    return <div style={{ padding: "16px", color: "red", fontSize: "18px" }}>News article not found.</div>
  }

  return (
    <div style={containerStyle}>
      <img src={article.imageUrl} alt={article.headline} style={imageStyle} />
      <h1 style={titleStyle}>{article.headline}</h1>
      <div style={metaStyle}>
        By {article.writer} | {article.date} {article.time} | <span className="capitalize">{article.newsType}</span>
      </div>
      <p style={contentStyle}>
        {article.detailedNews}
      </p>
      <div style={hashtagStyle}>
        {article.hashtags.map(tag => (
          <span key={tag} style={tagStyle}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default NewsPage

*/




import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';

function NewsPage() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`https://news-website-backend-qrpr.onrender.com/api/news/${id}`)
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error("Error fetching news:", err));
  }, [id]);

  if (!news) {
    return <div style={{ padding: "16px", color: "red", fontSize: "18px" }}>Loading news article...</div>
  }

  const containerStyle = {
    padding: "16px",
    maxWidth: "900px",
    margin: "auto",
    background: "white",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  };

  const imageStyle = {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "8px",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "16px",
    marginBottom: "8px",
  };

  const metaStyle = {
    color: "gray",
    fontSize: "14px",
    marginBottom: "16px",
  };

  const contentStyle = {
    fontSize: "18px",
    color: "#333",
    whiteSpace: "pre-line",
    marginBottom: "16px",
  };

  const hashtagStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  };

  const tagStyle = {
    backgroundColor: "#cce5ff",
    color: "#0056b3",
    padding: "6px 12px",
    borderRadius: "4px",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      <img src={news.imageUrl} alt={news.headline} style={imageStyle} />
      <h1 style={titleStyle}>{news.headline}</h1>
      <div style={metaStyle}>
        By {news.writer} | {news.date} {news.time} | <span className="capitalize">{news.newsType}</span>
      </div>
      <p style={contentStyle}>
        {news.detailedNews}
      </p>
      <div style={hashtagStyle}>
        {news.hashtags.map(tag => (
          <span key={tag} style={tagStyle}>#{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default NewsPage

