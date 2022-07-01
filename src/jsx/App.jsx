import React, { useState, useEffect, useRef } from 'react';
import '../styles/styles.less';

import scrollIntoView from 'scroll-into-view';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

import banner_img from '../../assets/img/edar_banner.png';
import report_cover from '../../assets/img/report_cover.png';
import graphic1 from '../../assets/img/graphic1.png';
import graphic2 from '../../assets/img/graphic2.png';
import graphic3 from '../../assets/img/graphic3.png';
import graphic4 from '../../assets/img/graphic4.png';

// https://www.highcharts.com/
// import Highcharts from 'highcharts';
// import highchartsAccessibility from 'highcharts/modules/accessibility';
// highchartsAccessibility(Highcharts);
// import highchartsExporting from 'highcharts/modules/exporting';
// highchartsExporting(Highcharts);

function App() {
  // Data states.
  const sectionRefs = [useRef(null), useRef(null)];
  const [y, setY] = useState(window.scrollY);
  const [anchorClicked, setAnchorClicked] = useState(false);
  // const [data, setData] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setY(window.scrollY);
      }
    });
    return () => {
      // window.removeEventListener('scroll');
    };
  }, [y]);

  const anchorClick = (i) => {
    setAnchorClicked(i);
    sectionRefs.forEach(el => {
      el.current.style.height = 0;
      el.current.style.opacity = 0;
      el.current.style.visibility = 'hidden';
      el.current.style.position = 'absolute';
    });

    document.querySelectorAll('.button_container').forEach(el => el.classList.remove('selected'));
    document.querySelector(`.button_container_${i}`).classList.add('selected');

    sectionRefs[i].current.style.position = 'static';
    sectionRefs[i].current.style.visibility = 'visible';
    sectionRefs[i].current.style.height = 'auto';
    sectionRefs[i].current.style.opacity = 1;

    scrollIntoView(sectionRefs[i].current, {
      time: 500,
      align: {
        top: 0,
        left: 0,
        topOffset: 100,
        leftOffset: 0,
        lockX: false,
        lockY: false
      }
    });

    // sectionRefs[i].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <div className="content_wrapper">
        <div className="placeholder">UNCTAD header</div>
        <div className="placeholder">Top navigation including links to Webflyer, presskit, other resources, etc</div>
        <div className="placeholder">Breadcrumbs</div>
        <div className="banner_container">
          <img className="banner_image" src={banner_img} alt="" />
        </div>
        <div className="page_navigation">
          <div className="button_container button_container_0">
            <button type="button" href="#section1" onClick={() => anchorClick(0)}>
              <div>Chapter 1</div>
              <div>Export diversification</div>
            </button>
          </div>
          <div className="button_container button_container_1">
            <button type="button" href="#section2" onClick={() => anchorClick(1)}>
              <div>Chapter 2</div>
              <div>Trade in services</div>
            </button>
          </div>
          <div className="button_container button_container_0">
            <button type="button" href="#section3">
              <div>Section 3</div>
              <div>Looking forward</div>
            </button>
          </div>
          <div className="button_container policy">
            <button type="button" href="#section3">
              <div>Policy</div>
              <div>recommendations</div>
            </button>
          </div>
        </div>
        <div className="container">
          <h4>Soaring food and energy prices are hitting African countries especially hard as they struggle with the impact of the pandemic and climate change.</h4>
          <h4>The continent of 1.4 billion people relies heavily on exports of grain and other essentials from Ukraine and Russia, exposing the 54 nations to shortages and crippling costs that imperil their development.</h4>
          <img className="content_image left" src={report_cover} alt="" />
          <p>To cope with the current crisis and insulate itself against future shocks, Africa must diversify its economies to attract investment and narrow huge income gaps.</p>
          <p>There is enormous potential for Africa to be more competitive by moving into service industries like finance and technology. To do this, companies need better access to affordable finance and bureaucratic red tape must be cut.</p>
          <blockquote>
            <span className="text">Africa must diversify their economy</span>
          </blockquote>
          <p>Governments must help businesses to access new markets, make new products and move up the value chain by shifting away from exports of raw materials into processed goods that command higher prices.</p>
          <p>For Africa to tap its true potential, stronger and more inclusive support is essential so women, young people and small companies have the skills, capital and opportunities to create viable businesses in markets now dominated by continental giants and multinationals.</p>
          <IsVisible once>
            {(isVisible) => (
              <div className={`iframe_container full ${(isVisible && y > 200) ? 'visible' : 'not_seen'} ${anchorClicked !== false ? 'notransition' : ''}`}>
                <iframe title="The Weekly Tradecast by UNCTAD" allowtransparency="true" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=7htjy-1261b27-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=1&size=240&skin=ffffff" allowFullScreen="" />
              </div>
            )}
          </IsVisible>
          <p>Better roads and railway networks would allow more efficient movement of goods, while stronger regional cooperation would open up trade, investment and mobility.</p>
          <p>The African Continental Free Trade Area aims to eliminate more than 90 percent of tariffs and create a single market with a growing middle class. To make the most of it, African countries must encourage investment, improve infrastructure and support innovation. Decent jobs, higher revenues and inclusive growth will be just some of the benefits.</p>

          <h3>African countries are highly dependend on one commody</h3>
          <p>We must push for more diverse economies to boost Africa and make it more resilient to shocks.</p>
          <IsVisible once>
            {(isVisible) => <img className={`content_image full ${(isVisible && y > 200) ? 'visible' : 'not_seen'} ${anchorClicked !== false ? 'notransition' : ''}`} src={graphic1} alt="" />}
          </IsVisible>
          <div className="placeholder">Video</div>
          <div className="chapter_navigation">
            <button className="chapter_selection" type="button" onClick={() => anchorClick(0)}>
              <div className="description">
                <p>African countries struggle to diversify their exports, partly due to historical factors that created path dependencies from a lack of skills endowment and technological advancement.</p>
                <div className="chapter_title_container">
                  <h2>The pulse diversification in Africa</h2>
                </div>
              </div>
            </button>
            <button className="chapter_selection" type="button" onClick={() => anchorClick(1)}>
              <div className="description">
                <p>African exports remain concentrated in a narrow range of commodities, with, however, some level of export diversification in a few African countries during the past decade.</p>
                <div className="chapter_title_container">
                  <h2>A niche diversification in Africa</h2>
                </div>
              </div>
            </button>
            <button className="chapter_selection" type="button">
              <div className="description">
                <p>New entrants and small-scale exporting companies, need to secure external financing to cover the large costs of entering export markets.</p>
                <div className="chapter_title_container">
                  <h2>The future diversification in Africa</h2>
                </div>
              </div>
            </button>
            <button className="chapter_selection" type="button">
              <div className="description">
                <p>Despite efforts to achieve export diversification, African countries remain predominantly dependent on exports of primary products in the agricultural, mining and extractive industries.</p>
                <div className="chapter_title_container policy">
                  <h2>Conclusion and rec&shy;om&shy;men&shy;da&shy;tion</h2>
                </div>
              </div>
            </button>
          </div>
          <div className="section_container" id="section1" ref={sectionRefs[0]}>
            <h3>Chapter 1: The pulse diversification in Africa</h3>
            <h4>To cope with the current crisis and insulate itself against future shocks, Africa must diversify its economies to attract investment and narrow huge income gaps.</h4>
            <img className="content_image full" src={graphic2} alt="" />
            <p>There is enormous potential for Africa to be more competitive by moving into service industries like finance and technology. To do this, companies need better access to affordable finance and bureaucratic red tape must be cut.</p>
            <p>Governments must help businesses to access new markets, make new products and move up the value chain by shifting away from exports of raw materials into processed goods that command higher prices.</p>
            <img className="content_image left" src={graphic3} alt="" />
            <blockquote>
              <span className="text">Africa must diversify their economy</span>
            </blockquote>
            <p>For Africa to tap its true potential, stronger and more inclusive support is essential so women, young people and small companies have the skills, capital and opportunities to create viable businesses in markets now dominated by continental giants and multinationals.</p>
            <img className="content_image right" src={graphic4} alt="" />
            <p>Better roads and railway networks would allow more efficient movement of goods, while stronger regional cooperation would open up trade, investment and mobility.</p>
            <blockquote>
              <span className="text">Africa must diversify their economy</span>
            </blockquote>
            <p>The African Continental Free Trade Area aims to eliminate more than 90 percent of tariffs and create a single market with a growing middle class. To make the most of it, African countries must encourage investment, improve infrastructure and support innovation. Decent jobs, higher revenues and inclusive growth will be just some of the benefits.</p>
            <h3>Policy recommendations</h3>
            <div className="recommendations_container">
              <div className="recommendation_container">
                <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
              </div>
              <div className="recommendation_container">
                <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
              </div>
            </div>
            <div className="download_section">
              <button type="button">Download full chapter 1</button>
            </div>
          </div>
          <div className="section_container" id="section2" ref={sectionRefs[1]}>
            <h3>Chapter 2: A niche diversification in Africa</h3>
            <h4>To cope with the current crisis and insulate itself against future shocks, Africa must diversify its economies to attract investment and narrow huge income gaps.</h4>
            <img className="content_image full" src={graphic2} alt="" />
            <p>There is enormous potential for Africa to be more competitive by moving into service industries like finance and technology. To do this, companies need better access to affordable finance and bureaucratic red tape must be cut.</p>
            <p>Governments must help businesses to access new markets, make new products and move up the value chain by shifting away from exports of raw materials into processed goods that command higher prices.</p>
            <img className="content_image left" src={graphic3} alt="" />
            <blockquote>
              <span className="text">Africa must diversify their economy</span>
            </blockquote>
            <p>For Africa to tap its true potential, stronger and more inclusive support is essential so women, young people and small companies have the skills, capital and opportunities to create viable businesses in markets now dominated by continental giants and multinationals.</p>
            <img className="content_image right" src={graphic4} alt="" />
            <p>Better roads and railway networks would allow more efficient movement of goods, while stronger regional cooperation would open up trade, investment and mobility.</p>
            <blockquote>
              <span className="text">Africa must diversify their economy</span>
            </blockquote>
            <p>The African Continental Free Trade Area aims to eliminate more than 90 percent of tariffs and create a single market with a growing middle class. To make the most of it, African countries must encourage investment, improve infrastructure and support innovation. Decent jobs, higher revenues and inclusive growth will be just some of the benefits.</p>
            <h3>Policy recommendations</h3>
            <div className="recommendations_container">
              <div className="recommendation_container">
                <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
              </div>
              <div className="recommendation_container">
                <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
              </div>
            </div>
            <div className="download_section">
              <button type="button">Download full chapter 2</button>
            </div>
          </div>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
