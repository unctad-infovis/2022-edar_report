import React from 'react';
import PropTypes from 'prop-types';

function SocialMediaButtons({ text, url, image }) {
  return (
    <div className="social_media_buttons">
      Share on social media
      <a href={`#${url} ${text} ${image}`}>
        <img src="https://unctad.org/themes/custom/newyork/images/inline-images/sn6.png" alt="" />
        Twitter
      </a>
      <a href={`#${url} ${text} ${image}`}>
        <img src="https://unctad.org/themes/custom/newyork/images/inline-images/sn1.png" alt="" />
        Facebook
      </a>
      <a href={`#${url} ${text} ${image}`}>
        <img src="https://unctad.org/themes/custom/newyork/images/inline-images/sn5.png" alt="" />
        Facebook
      </a>
      <a href={`#${url} ${text} ${image}`}>
        <img src="https://unctad.org/themes/custom/newyork/images/inline-images/sn2.png" alt="" />
        Facebook
      </a>
    </div>
  );
}

SocialMediaButtons.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default SocialMediaButtons;
