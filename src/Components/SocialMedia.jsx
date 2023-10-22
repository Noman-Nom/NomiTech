import React from "react";

import {
  AiFillGithub,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineInstagram,
} from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/muhammad-noman-770825277/" target="_blank">
          <AiFillLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/Noman-Nom" target="_blank">
          <AiFillGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/muhammadnoman.awan.73?mibextid=ZbWKwL"
          target="_blank"
        >
          <AiFillFacebook />
        </a>
      </div>
      <div>
        <a
          href="https://x.com/NomiTechh?t=13PuVJbUrkGvwqPLn4Th7A&s=09"
          target="_blank"
        >
          <AiFillTwitterCircle />
        </a>
      </div>
      <div>
      <a
          href="https://instagram.com/nomitechh?utm_source=qr&igshid=OGIxMTE0OTdkZA=="
          target="_blank"
        >
          <AiOutlineInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
