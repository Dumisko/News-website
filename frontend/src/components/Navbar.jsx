import { Link } from 'react-router-dom'
import React from 'react'

const categories = ['sports', 'science', 'geopolitics', 'weather', 'culture', 'politics', 'space', 'education']

function Navbar() {
    const navbarStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "16px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
  };

  const navbarLinksStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    marginTop: "8px",
  };
  return (
    <nav style={navbarStyle}>
      <Link to="/" style={linkStyle}>🗞️ NewsHub</Link>
      <div style={navbarLinksStyle}>
        {categories.map(cat => (
          <Link key={cat} to={`/category/${cat}`} style={linkStyle}>
            {cat}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar

