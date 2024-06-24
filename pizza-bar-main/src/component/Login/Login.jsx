import React, { useState } from "react"
import "./Login.css"

const Login = ({ setShowLogin }) => {
  localStorage
  return (
    <div className="login">
      <form className="login-container">
        <div className="login-title">
          <h2>會員登入</h2>
          <div onClick={() => setShowLogin(false)}>X</div>
        </div>
        <div className="login-input">
          <input type="text" placeholder="請輸入帳號" />
          <input type="password" placeholder="請輸入密碼" />
        </div>
        <button>登入</button>
        <p>
          還不是會員?<span>立即註冊</span>
        </p>
      </form>
    </div>
  )
}

export default Login
