<<<<<<< HEAD
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
          <a href="https://fb.com/syfuddhin" className="link" target="_blank">
            <FaFacebookF />
          </a>
          <a href="mailto:syfuddhin@gmail.com" className="link" target="_blank">
            <FaGoogle />
          </a>
          <a
            href="https://www.instagram.com/syfuddhin"
            className="link"
            target="_blank"
          >
            <FaInstagram />
          </a>

          <a href="https://github.com/soab42" className="link" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/soab-mahmud-4a202787"
            className="link"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://wa.me/1644556543" className="link" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </footer>
    </div>
  );
}
=======
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
          <a href="https://fb.com/syfuddhin" className="link" target="_blank">
            <FaFacebookF />
          </a>
          <a href="mailto:syfuddhin@gmail.com" className="link" target="_blank">
            <FaGoogle />
          </a>
          <a
            href="https://www.instagram.com/syfuddhin"
            className="link"
            target="_blank"
          >
            <FaInstagram />
          </a>

          <a href="https://github.com/soab42" className="link" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/soab-mahmud-4a202787"
            className="link"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://wa.me/1644556543" className="link" target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </footer>
    </div>
  );
}
>>>>>>> 41aacb10138a7bc96d479eebc451410c1dd06ab7
