import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import {
  TiMail,
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";

export default function Footer() {
  return (
    <div className="footerDiv bg-white">
      <footer className="footer ">
        <p className="mb-0">
          Copyright {new Date().getFullYear()}
          &copy;SYFUDDHIN
        </p>
        <div className="social-links text-right m-auto ml-sm-auto">
          <a href="#" className="link">
            <FaFacebookF />
          </a>
          <a href="#" className="link">
            <FaGoogle />
          </a>
          <a href="#" className="link">
            <FaInstagram />
          </a>

          <a href="#" className="link">
            <FaGithub />
          </a>
          <a href="#" className="link">
            <FaLinkedinIn />
          </a>
          <a href="#" className="link">
            <FaWhatsapp />
          </a>
        </div>
      </footer>
    </div>
  );
}
