import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="hm-footer-social">
            <p>Nous somme sociables !</p>
            <div className="footer-social">
              <a href="#"><i className="fa fa-facebook"></i></a>	
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="https://www.youtube.com/channel/UCy1fQZLkorrsRKvtkbaF4pw"><i className="fas fa-youtube"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
          </div>
          <div className="hm-footer-logo"><img src={require('../../assets/images/logo/logoBlanc.PNG')} alt="Hasnaoui"/></div>
        </div>  
      </footer>
    </>
  )
}

export default Footer
