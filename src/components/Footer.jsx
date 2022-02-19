import React from "react";

const Footer = () => {
  return (
    <footer className="footer_area section_padding_130_0">
      <div className="container">
        <div className="row">
          {/* <!-- Single Widget--> */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-footer-widget section_padding_0_130">
              {/* <!-- Footer Logo--> */}
              <div className="footer-logo mb-3"></div>
              <p className="footer-brand-name">
                Zomato
              </p>
              {/* <!-- Copywrite Text--> */}
              <div className="copywrite-text mb-5">
                <p className="mb-0">
                  Zomato Clone Made by
                  <a className="ml-1" href="https://github.com/more1251" target="_blank" rel="noopener noreferrer">Shubham More</a>
                </p>
              </div>
              {/* <!-- Footer Social Area--> */}
              <div className="footer_social_area">
                <a href="/"  data-toggle="tooltip" data-placement="top" title="">
                  <i className="fa fa-facebook"></i>
                </a>

                <a href="/"  data-toggle="tooltip" data-placement="top" title="">
                  <i className="fa fa-instagram"></i>
                </a>

                <a href="/"  data-toggle="tooltip" data-placement="top" title="">
                  <i className="fa fa-twitter"></i>
                </a>
                
              </div>
            </div>
          </div>

          {/* <!-- Single Widget--> */}
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              {/* <!-- Widget Title--> */}
              <h5 className="widget-title">Company</h5>
              {/* <!-- Footer Menu--> */}
              <div className="footer_menu">
                <ul>
                  <li>
                    <a href="/">Who We Are</a>
                  </li>
                  <li>
                    <a href="/">Blog</a>
                  </li>
                  <li>
                    <a href="/">Careers</a>
                  </li>
                  <li>
                    <a href="/">Report Fraud</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                  <li>
                    <a href="/">Investor Relations</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Single Widget--> */}
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              {/* <!-- Widget Title--> */}
              <h5 className="widget-title">For Foodies</h5>
              {/* <!-- Footer Menu--> */}
              <div className="footer_menu">
                <ul>
                  <li>
                    <a href="/">Code of Conduct</a>
                  </li>
                  <li>
                    <a href="/">Blogger Help</a>
                  </li>
                  <li>
                    <a href="/">Mobile Apps</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Single Widget--> */}
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              {/* <!-- Widget Title--> */}
              <h5 className="widget-title">For You</h5>
              {/* <!-- Footer Menu--> */}
              <div className="footer_menu">
                <ul>
                  <li>
                    <a href="/">Privacy</a>
                  </li>
                  <li>
                    <a href="/">Terms</a>
                  </li>
                  <li>
                    <a href="/">Security</a>
                  </li>
                  <li>
                    <a href="/">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- Single Widget--> */}
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              {/* <!-- Widget Title--> */}
              <h5 className="widget-title">For Restaurants</h5>
              {/* <!-- Footer Menu--> */}
              <div className="footer_menu">
                <ul>
                  <li>
                    <a href="/">Add a Restaurant</a>
                  </li>
                  <li>
                    <a href="/"><img className="app-img" src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="appstoreimage" /> </a>
                  </li>
                  <li>
                    <a href="/"><img className="app-img" src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="playstoreimage" /> </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
