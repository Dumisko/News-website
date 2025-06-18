import { Link } from 'react-router-dom'
import React from 'react'

function NewsCard({ news }) {

  const cardStyle = {
    backgroundColor: "white",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
  };

  const hoverStyle = {
    transform: "scale(1.05)",
  };

  const imageStyle = {
    width: "100%",
    height: "192px",
    objectFit: "cover",
  };

  const contentStyle = {
    padding: "16px",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "8px",
  };

  const summaryStyle = {
    fontSize: "14px",
    color: "gray",
  };

  const linkStyle = {
    color: "#007bff",
    marginTop: "8px",
    display: "inline-block",
    textDecoration: "none",
  };

  const linkHoverStyle = {
    textDecoration: "underline",
  };




  return (
    <div style={cardStyle}   onMouseEnter={(e) => (e.currentTarget.style.transform = hoverStyle.transform)} onMouseLeave={(e) => (e.currentTarget.style.transform = "")}>
      <img src={news.imageUrl} alt={news.headline} style={imageStyle} />
      <div style={contentStyle}>
        <h2 style={titleStyle}>{news.headline}</h2>
        <p style={summaryStyle}>{news.summary}</p>
        <Link to={`/news/${news._id}`} style={linkStyle}   onMouseEnter={(e) => (e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration)} onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "")}>
          Read more →
        </Link>
      </div>
    </div>
  )
}

export default NewsCard

