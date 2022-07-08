import React from 'react';
import IsVisible from 'react-is-visible';

import photo4 from '../../assets/img/photos/shutterstock_2113047023-min.jpg';

let animated = false;
function PolicyRecommendations(anchorClicked) {
  const showElements = () => {
    if (animated === false) {
      setTimeout(() => {
        animated = true;
        const recommendation_count = document.querySelectorAll('.recommendation_container').length;
        let i = 1;
        const interval = setInterval(() => {
          if (i >= recommendation_count) {
            clearInterval(interval);
          }
          document.querySelector(`.recommendation_container_${i}`).style.opacity = 1;
          i++;
        }, 1000);
      }, 300);
    }
  };
  return (
    <div>
      <div className="content_container">
        <h3>Conclusions and policy recommendations</h3>
        <img className="content_image right" style={{ transform: 'rotate(3deg)', border: '2px solid #AEA29A' }} src={photo4} alt="" />
        <p>Bacon ipsum dolor amet kevin ham tenderloin rump biltong. Corned beef andouille filet mignon ham burgdoggen swine hamburger tenderloin kielbasa kevin beef ribs rump. Chicken bresaola pancetta beef. Pig pork loin chislic pork chop ham pork belly turducken kevin shank. Chislic kielbasa picanha, tri-tip tongue pig kevin strip steak hamburger prosciutto pork belly filet mignon ground round. Strip steak filet mignon doner corned beef.</p>
        <p>Bacon ipsum dolor amet kevin ham tenderloin rump biltong. Corned beef andouille filet mignon ham burgdoggen swine hamburger tenderloin kielbasa kevin beef ribs rump. Chicken bresaola pancetta beef. Pig pork loin chislic pork chop ham pork belly turducken kevin shank. Chislic kielbasa picanha, tri-tip tongue pig kevin strip steak hamburger prosciutto pork belly filet mignon ground round. Strip steak filet mignon doner corned beef.</p>
        <IsVisible once>
          {(isVisible) => (
            <div className={`recommendations_container ${(isVisible) ? 'visible' : 'not_seen'} ${anchorClicked !== false ? 'notransition' : ''}`}>
              {(isVisible ? showElements() : null)}
              <div className="recommendation_container recommendation_container_1">
                <p>Improve the capacity of people and firms to emulate and innovate</p>
              </div>
              <div className="recommendation_container recommendation_container_2">
                <p>Support firms to innovate</p>
              </div>
              <div className="recommendation_container recommendation_container_3">
                <p>Expand the set of technologies and infrastructure</p>
              </div>
              <div className="recommendation_container recommendation_container_4">
                <p>Reinforce linkages between industries and encourage the use of local content and suppliers by domestic firms </p>
              </div>
              <div className="recommendation_container recommendation_container_5">
                <p>Enhance the access of small and medium-sized enterprises to alternative finance</p>
              </div>
              <div className="recommendation_container recommendation_container_6">
                <p>Maximize the potential benefits of the African Continental Free Trade Area for export diversification by streamlining with inclusive growth and financial inclusion goals and practices</p>
              </div>
              <div className="recommendation_container recommendation_container_7">
                <p>Strengthen efforts to improve trade and financial data</p>
              </div>
              <div className="recommendation_container recommendation_container_8">
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
