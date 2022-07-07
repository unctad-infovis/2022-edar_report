import React from 'react';
import IsVisible from 'react-is-visible';

function PolicyRecommendations(anchorClicked) {
  return (
    <div>
      <div className="content_container">
        <h3>Conclusions and policy recommendations</h3>
        <p>Bacon ipsum dolor amet kevin ham tenderloin rump biltong. Corned beef andouille filet mignon ham burgdoggen swine hamburger tenderloin kielbasa kevin beef ribs rump. Chicken bresaola pancetta beef. Pig pork loin chislic pork chop ham pork belly turducken kevin shank. Chislic kielbasa picanha, tri-tip tongue pig kevin strip steak hamburger prosciutto pork belly filet mignon ground round. Strip steak filet mignon doner corned beef.</p>
        <IsVisible once>
          {(isVisible) => (
            <div className={`recommendations_container ${(isVisible) ? 'visible' : 'not_seen'} ${anchorClicked !== false ? 'notransition' : ''}`}>
              <div className="recommendation_container">
                <p>Improve the capacity of people and firms to emulate and innovate</p>
              </div>
              <div className="recommendation_container">
                <p>Support firms to innovate</p>
              </div>
              <div className="recommendation_container">
                <p>Expand the set of technologies and infrastructure</p>
              </div>
              <div className="recommendation_container">
                <p>Reinforce linkages between industries and encourage the use of local content and suppliers by domestic firms </p>
              </div>
              <div className="recommendation_container">
                <p>Enhance the access of small and medium-sized enterprises to alternative finance</p>
              </div>
              <div className="recommendation_container">
                <p>Maximize the potential benefits of the African Continental Free Trade Area for export diversification by streamlining with inclusive growth and financial inclusion goals and practices</p>
              </div>
              <div className="recommendation_container">
                <p>Strengthen efforts to improve trade and financial data</p>
              </div>
              <div className="recommendation_container">
                <p>Putting recommendations into practice</p>
              </div>
            </div>
          )}
        </IsVisible>
        <p>Bacon ipsum dolor amet kevin ham tenderloin rump biltong. Corned beef andouille filet mignon ham burgdoggen swine hamburger tenderloin kielbasa kevin beef ribs rump. Chicken bresaola pancetta beef. Pig pork loin chislic pork chop ham pork belly turducken kevin shank. Chislic kielbasa picanha, tri-tip tongue pig kevin strip steak hamburger prosciutto pork belly filet mignon ground round. Strip steak filet mignon doner corned beef.</p>
        <div className="download_section">
          <button type="button">Download Chapter 4 as PDF</button>
        </div>
      </div>
    </div>
  );
}

export default PolicyRecommendations;
