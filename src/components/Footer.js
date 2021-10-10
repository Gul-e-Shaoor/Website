import { Link } from "react-router-dom";
import "../index.css"
const Footer = () => {
    return ( <footer class="footer">
    <div className="footer-left col-md-4 col-sm-6">
      <p className="about">
        <span> About the company</span>We nurture young minds towards a productive approach and build their capacity for career development over international standards by fulfilling their need of counselling, mentorship, information, healthy entertainment and a supporting community.
      </p>
      <div className="icons">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-google-plus"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
      </div>
    </div>
    <div className="footer-center col-md-4 col-sm-6">
      <div>
        <i className="fa fa-map-marker"></i>
        <p><span> Street name and number</span> City, Country</p>
      </div>
      <div>
        <i className="fa fa-phone"></i>
        <p> (+00) 0000 000 000</p>
      </div>
      <div>
        <i className="fa fa-envelope"></i>
        <p><a href="#"> office@company.com</a></p>
      </div>
    </div>
    <div className="footer-right col-md-4 col-sm-6">
      <h2> Company<span> logo</span></h2>
      <p className="menu">
       <Link to ="/"> Home</Link> |
        <Link to="/about"> About</Link> |
        <Link to="/services"> Services</Link> 
       
      </p>
      <p className="name"> Gul-e-Shaor &copy; 2021</p>
    </div>
  </footer> );
}
 
export default Footer;