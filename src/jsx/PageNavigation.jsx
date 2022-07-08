import React from 'react';
import PropTypes from 'prop-types';

function PageNavigation({ anchorClick }) {
  return (
    <div className="page_navigation">
      <div className="button_container button_container_0">
        <button type="button" href="#section1" onClick={() => anchorClick(0)}>
          <div className="chapter_label">Chapter 1</div>
          <div className="chapter_title">Export diversification</div>
        </button>
      </div>
      <div className="button_container button_container_1">
        <button type="button" href="#section2" onClick={() => anchorClick(1)}>
          <div className="chapter_label">Chapter 2</div>
          <div className="chapter_title">Trade in services</div>
        </button>
      </div>
      <div className="button_container button_container_2">
        <button type="button" href="#section3" onClick={() => anchorClick(2)}>
          <div className="chapter_label">Chapter 3</div>
          <div className="chapter_title">Looking ahead</div>
        </button>
      </div>
      <div className="button_container button_container_3">
        <button type="button" className="policy" href="#section4" onClick={() => anchorClick(3)}>
          <div className="chapter_title">Policy</div>
          <div className="chapter_title">recommendations</div>
        </button>
      </div>
    </div>
  );
}
PageNavigation.propTypes = {
  anchorClick: PropTypes.func.isRequired
};

export default PageNavigation;
