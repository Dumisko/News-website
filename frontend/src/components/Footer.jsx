import React from "react"

function Footer() {
    const footerStyle = {
    backgroundColor: "#333",
    color: "white",
    padding: "16px",
    textAlign: "center",
    fontSize: "16px",
  };
  return (
    <footer style={footerStyle}>
      © {new Date().getFullYear()} NewsHub. All rights reserved.
    </footer>
  )
}

export default Footer
