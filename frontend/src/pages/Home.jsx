import NewsCard from '../components/NewsCard'
// import news from '../data/news.json'
import { useEffect, useState } from 'react'
import React from 'react'

function Home() {
    const [news, setNews] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/news')
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error("Error fetching news:", err));
  }, [])


    const homeStyle = {
    padding: "16px",
  };

  const categoryStyle = {
    marginBottom: "40px",
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


  // Grouping news by type
  const groupedNews = news.reduce((acc, item) => {
    acc[item.newsType] = acc[item.newsType] || []
    acc[item.newsType].push(item)
    return acc
  }, {})

  return (
    <div style={homeStyle}>
      {Object.entries(groupedNews).map(([category, articles]) => (
        <div key={category} style={categoryStyle}>
          <h2 style={titleStyle}>{category} News</h2>
          <div style={gridStyle}>
            {articles.map(item => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )

}

export default Home
