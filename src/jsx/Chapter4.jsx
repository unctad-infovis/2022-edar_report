import React from 'react';
import IsVisible from 'react-is-visible';

import DownloadButton from './helpers/DownloadButton.jsx';

import photo1 from '../../assets/img/photos/EDAR-2022-chapter4_photo1.jpg';

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
      <div className="heading_container">
        <img className="content_image right" src={photo1} alt="" />
        <div className="content">
          <h1>4. Conclusions and policy recommendations</h1>
          <h2>The services sector could be a forceful impetus for economic diversification, growth and structural transformation in Africa. But this requires that policies be aligned to build complementarities between the services sector and other sectors of the economy, especially manufacturing.</h2>
          <div className="download_section">
            <DownloadButton href="//unctad.org/system/files/official-document/aldcafrica2022_Ch4_en.pdf" text="Download Chapter 4" />
          </div>
        </div>
      </div>
      <div className="content_container">
        <p>UNCTAD recommends that African governments and businesses take the following policy actions to support effective exports diversification on the continent:</p>
        <div className="clear_both" />
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
        <p>UNCTAD stands ready to provide cutting-edge economic research and policy analysis and data tools to support African countries in their efforts to reach export diversification and sustainable development objectives.</p>
        <p>In partnership with regional and national institutions, UNCTAD can deliver institutional and productive capacity-building programmes and offer support to build consensus on key policy and regulatory issues with a view to achieving effective structural change on the continent.</p>
        <div className="download_section">
          <DownloadButton href="//unctad.org/system/files/official-document/aldcafrica2022_Ch4_en.pdf" text="Download Chapter 4" />
        </div>
      </div>
    </div>
  );
}

export default PolicyRecommendations;
