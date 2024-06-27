import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_terms_wrapper">
          <div className="footer-logo-img-wrapper">
            <div className="footer-logo-img">
              <img
                src="https://assets.inshorts.com/website_assets/images/logo_footer.png"
                alt="inshorts-logo"
              />
            </div>
            <span className="footer_img_text">
              <span>Inshorts</span> Pte. Ltd.
            </span>
            <br />
            <span className="footer_img_text">&copy;COPYRIGHT 2024</span>
          </div>
          <div className="footer_contact_wrapper">
            <div>
              <h2>Contact us</h2>
            </div>
            <span className="footer_contact_text">Terms & conditions</span>
            <br />
            <span className="footer_contact_text">Privacy Policies</span>
          </div>
        </div>
        <div className="iconContainer">
          <a href="https://www.facebook.com/inshortsapp" target="__blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://x.com/inshorts" target="__blank">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://in.linkedin.com/company/inshorts-group"
            target="__blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
