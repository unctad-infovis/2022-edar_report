import React, { useState, useEffect, useRef } from 'react';
import '../styles/styles.less';

import scrollIntoView from 'scroll-into-view';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

import banner_img from '../../assets/img/highlight-EDAR.png';
// import report_cover from '../../assets/img/report_cover.png';
import graphic1 from '../../assets/img/test/graphic1.png';
import graphic2 from '../../assets/img/test/graphic2.png';
import graphic3 from '../../assets/img/test/graphic3.png';
import graphic4 from '../../assets/img/test/graphic4.png';

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
      <div className="background_container" />
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
              <div>Looking ahead</div>
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
          <h4>Soaring food and energy prices are hitting African countries especially hard as they struggle with the impact of the COVID-19 pandemic, climate change and the war in Ukraine.</h4>
          <h4>To cope with current crises and insulate itself against future shocks, Africa must diversify its economies. The continent of 1.4 billion people is among the least diversified regions in the world with regard to exports. </h4>
          <img className="content_image right" style={{ transform: 'rotate(3deg)', border: '2px solid #AEA29A' }} src="https://via.placeholder.com/300/AEA29A/000000/?text=Placeholder%20photo" alt="" />
          <p>Commodities account for more than 60% of total merchandise exports in 45 of the 54 countries in Africa, leaving them highly vulnerable to global commodity price shocks and undermining the continent’s inclusive growth and development prospects. </p>
          <p>UNCTAD’s Economic Development in Africa Report 2022 shows that neglecting the potentially transformative role of high knowledge-intensive services, such as information and communications technology services and financial services, is among the key reasons why export diversification remains a challenge in Africa. </p>
          <blockquote>
            <span className="text">Highlight from the report</span>
          </blockquote>
          <p>The report shows that effectively addressing barriers to services trade under the African Continental Free Trade Area will be key to unleashing the transformative role of services in enhancing the diversity and complexity of products from Africa. </p>
          <p>UNCTAD recommends that for export diversification strategies to be impactful in Africa, policies need to be in place that enhance inclusive access to innovative financing technologies, including for small and medium-sized enterprises.</p>
          <p>Leveraging high knowledge-intensive services to increase productivity and improve competitiveness in the private sector will be key to achieving higher value-added diversification and growth on the continent.</p>
          <IsVisible once>
            {(isVisible) => (
              <div className={`iframe_container full ${(isVisible && y > 200) ? 'visible' : 'not_seen'} ${anchorClicked !== false ? 'notransition' : ''}`}>
                <iframe title="The Weekly Tradecast by UNCTAD" allowtransparency="true" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=7htjy-1261b27-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=1&size=240&skin=ffffff" allowFullScreen="" />
              </div>
            )}
          </IsVisible>

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
                  <h2>The pulse of export diversification in Africa</h2>
                </div>
              </div>
            </button>
            <button className="chapter_selection" type="button" onClick={() => anchorClick(1)}>
              <div className="description">
                <p>Trade in services on the continent is both low and heavily dominated by traditional services, whereas high knowledge-intensive services and technology-enabling services have the potential to boost innovation and drive diversification.</p>
                <div className="chapter_title_container">
                  <h2>Trade in services: A niche for export diversification in Africa</h2>
                </div>
              </div>
            </button>
            <button className="chapter_selection" type="button">
              <div className="description">
                <p>Small and medium enterprises can facilitate export diversification in Africa, especially through the services sector, when supported by sound financial services or provided with access to affordable financing.</p>
                <div className="chapter_title_container">
                  <h2>Financial services and private sector: The future of export diversification in Africa</h2>
                </div>
              </div>
            </button>
            <button className="chapter_selection" type="button">
              <div className="description">
                <p>The diversification of African exports and economies is the most viable means by which these countries can prosper in the global economy and survive vulnerabilities and economic uncertainties exacerbated by commodity price volatility.</p>
                <div className="chapter_title_container policy">
                  <h2>Conclusion and policy rec&shy;om&shy;men&shy;da&shy;tion</h2>
                </div>
              </div>
            </button>
          </div>
          <div className="section_container" id="section1" ref={sectionRefs[0]}>
            <h3>Chapter 1: The pulse of export diversification in Africa</h3>
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
