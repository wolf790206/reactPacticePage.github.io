import React from "react"
import "./Footer.css"
import logo from "../../assets/logo.png"
import faceBook from "../../assets/facebook.png"
import instagram from "../../assets/instagram.png"
import line from "../../assets/line.png"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="footer-content-center">
          <h3>關於Pizza Bar</h3>
          <ul>
            <li>品牌故事</li>
            <li>連絡我們</li>
            <li>網站地圖</li>
            <li>人才招募</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h3>聯絡我們</h3>
          <div className="footer-img">
            <img src={faceBook} alt="" />
            <img src={instagram} alt="" />
            <img src={line} alt="" />
          </div>
        </div>
      </div>
      <p>© 2024 Pizza Bar. All rights reserved.</p>
    </div>
  )
}

export default Footer
