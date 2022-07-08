import React from 'react';
import PropTypes from 'prop-types';

import photo2 from '../../assets/img/photos/shutterstock_2013653246-min.jpg';

function ChapterNavigation({ anchorClick }) {
  return (
    <div>
      <div className="chapter_navigation">
        <button className="chapter_selection" type="button" onClick={() => anchorClick(0)}>
          <div className="description">
            <div className="chapter_title_container">
              <h2>The pulse of export di&shy;ver&shy;si&shy;fi&shy;ca&shy;tion in Africa</h2>
            </div>
            <p>African countries struggle to diversify their exports, partly due to historical factors that created path dependencies from a lack of skills endowment and technological advancement.</p>
          </div>
        </button>
        <button className="chapter_selection" type="button" onClick={() => anchorClick(1)}>
          <div className="description">
            <div className="chapter_title_container">
              <h2>Trade in services: A niche for export di&shy;ver&shy;si&shy;fi&shy;ca&shy;tion in Africa</h2>
            </div>
            <p>Trade in services on the continent is both low and heavily dominated by traditional services, whereas high knowledge-intensive services and technology-enabling services have the potential to boost innovation and drive di&shy;ver&shy;si&shy;fi&shy;ca&shy;tion.</p>
          </div>
        </button>
        <button className="chapter_selection" type="button" onClick={() => anchorClick(2)}>
          <div className="description">
            <div className="chapter_title_container">
              <h2>Financial services and private sector: The future of export di&shy;ver&shy;si&shy;fi&shy;ca&shy;tion in Africa</h2>
            </div>
            <p>Firms can facilitate high-value-added export di&shy;ver&shy;si&shy;fi&shy;ca&shy;tion in Africa, especially through the services sector, when supported by sound financial services or provided with access to affordable financing.</p>
          </div>
        </button>
      </div>
      <div className="chapter_navigation policy" style={{ backgroundImage: `url(${photo2})`, minHeight: '640px' }}>
        <button className="chapter_selection policy" type="button" onClick={() => anchorClick(3)} style={{ position: 'absolute' }}>
          <div className="description">
            <div className="chapter_title_container policy">
              <h2>Conclusion and policy rec&shy;om&shy;men&shy;da&shy;tions</h2>
            </div>
            <p>The di&shy;ver&shy;si&shy;fi&shy;ca&shy;tion of African exports and economies is the most viable means by which these countries can prosper in the global economy and survive vulnerabilities and economic uncertainties exacerbated by commodity price volatility.</p>
          </div>
        </button>
      </div>
    </div>
  );
}
ChapterNavigation.propTypes = {
  anchorClick: PropTypes.func.isRequired
};

export default ChapterNavigation;
