import React from 'react';
import PropTypes from 'prop-types';

function ChapterNavigation({ anchorClick }) {
  const onMouseOverChapter = (event) => {
    document.querySelectorAll('.chapter_selection').forEach(el => {
      el.classList.add('nohover');
      el.classList.remove('hover');
    });
    event.target.classList.add('hover');
    event.target.classList.remove('nohover');
  };
  const onMouseLeaveChapter = () => {
    document.querySelectorAll('.chapter_selection').forEach(el => {
      el.classList.remove('nohover');
      el.classList.remove('hover');
    });
  };
  return (
    <div className="chapter_navigation_wrapper">
      <div className="chapter_navigation chapters">
        <button className="chapter_selection chapter_selection_0 chapter" type="button" onClick={() => anchorClick(0)} onMouseOver={(event) => onMouseOverChapter(event)} onMouseLeave={() => onMouseLeaveChapter()} onFocus={(event) => onMouseOverChapter(event)}>
          <div>
            <div className="chapter_title_container chapter">
              <h2>The pulse of export diversification in Africa</h2>
            </div>
            <h3>African countries struggle to diversify their exports, partly due to historical factors that created path dependencies from a lack of skills endowment and technological advancement.</h3>
          </div>
        </button>
        <button className="chapter_selection chapter_selection_1 chapter" type="button" onClick={() => anchorClick(1)} onMouseOver={(event) => onMouseOverChapter(event)} onMouseLeave={() => onMouseLeaveChapter()} onFocus={(event) => onMouseOverChapter(event)}>
          <div>
            <div className="chapter_title_container chapter">
              <h2>Trade in services: A niche for export diversification in Africa</h2>
            </div>
            <h3>Trade in services on the continent is both low and heavily dominated by traditional services, whereas high knowledge-intensive services and technology-enabling services have the potential to boost innovation and drive diversification.</h3>
          </div>
        </button>
        <button className="chapter_selection chapter_selection_2 chapter" type="button" onClick={() => anchorClick(2)} onMouseOver={(event) => onMouseOverChapter(event)} onMouseLeave={() => onMouseLeaveChapter()} onFocus={(event) => onMouseOverChapter(event)}>
          <div>
            <div className="chapter_title_container chapter">
              <h2>Financial services and private sector: The future of export diversification in Africa</h2>
            </div>
            <h3>Firms can facilitate high-value-added export diversification in Africa, especially through the services sector, when supported by sound financial services or provided with access to affordable financing.</h3>
          </div>
        </button>
      </div>
      <div className="chapter_navigation policy">
        <button className="chapter_selection policy" type="button" onClick={() => anchorClick(3)} onMouseOver={(event) => onMouseOverChapter(event)} onMouseLeave={() => onMouseLeaveChapter()} onFocus={(event) => onMouseOverChapter(event)} style={{ position: 'absolute' }}>
          <div>
            <div className="chapter_title_container policy">
              <h2>Conclusion and policy recommendations</h2>
            </div>
            <h3>The diversification of African exports and economies is the most viable means by which these countries can prosper in the global economy and survive vulnerabilities and economic uncertainties exacerbated by commodity price volatility.</h3>
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
