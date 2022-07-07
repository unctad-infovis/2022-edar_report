import React, { useState, useEffect, useRef } from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/scroll-into-view
import scrollIntoView from 'scroll-into-view';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

import banner_img from '../../assets/img/highlight-EDAR.png';
import graphic1 from '../../assets/img/test/graphic1.png';
import graphic11 from '../../assets/img/test/graphic11.png';

import PageNavigation from './PageNavigation.jsx';
import Chapter1 from './Chapter1.jsx';
import Chapter2 from './Chapter2.jsx';
import Chapter3 from './Chapter3.jsx';
import Chapter4 from './Chapter4.jsx';

// https://www.highcharts.com/
// import Highcharts from 'highcharts';
// import highchartsAccessibility from 'highcharts/modules/accessibility';
// highchartsAccessibility(Highcharts);
// import highchartsExporting from 'highcharts/modules/exporting';
// highchartsExporting(Highcharts);

function App() {
  // Data states.
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
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
    document.querySelectorAll(`.button_container_${i}`).forEach(el => el.classList.add('selected'));

    sectionRefs[i].current.style.position = 'static';
    sectionRefs[i].current.style.visibility = 'visible';
    sectionRefs[i].current.style.height = 'auto';
    sectionRefs[i].current.style.opacity = 1;

    setTimeout(() => {
      scrollIntoView(sectionRefs[i].current, {
        time: 500,
        align: {
          left: 0,
          leftOffset: 0,
          lockX: false,
          lockY: false,
          top: 0,
          topOffset: 100
        },
        cancellable: false
      });
    }, 200);
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
        <PageNavigation anchorClick={anchorClick} />
        <div className="content_container">
          <h1>Rethinking the Foundations of Export Diversification in Africa</h1>
          <img className="content_image right" style={{ transform: 'rotate(3deg)', border: '2px solid #AEA29A' }} src="https://via.placeholder.com/280/AEA29A/000000/?text=Placeholder%20photo" alt="" />
          <h4>Soaring food and energy prices are hitting African countries especially hard as they struggle with the impact of the COVID-19 pandemic, climate change and the war in Ukraine.</h4>
          <h4>To cope with current crises and insulate itself against future shocks, Africa must diversify its economies. The continent of 1.4 billion people is among the least diversified regions in the world with regard to exports.</h4>
          <div className="download_section">
            <button type="button">Download the executive summary as PDF</button>
          </div>
          <p>Commodities account for more than 60% of total merchandise exports in 45 of the 54 countries in Africa, leaving them highly vulnerable to global commodity price shocks and undermining the continent’s inclusive growth and development prospects.</p>
          <p>UNCTAD’s Economic Development in Africa Report 2022 shows that neglecting the potentially transformative role of high knowledge-intensive services, such as information and communications technology services and financial services, is among the key reasons why export diversification remains a challenge in Africa.</p>
          <blockquote>
            <span className="text">High knowledge-intensive services can foster diversification</span>
          </blockquote>
          <p>The report shows that effectively addressing barriers to services trade under the African Continental Free Trade Area will be key to unleashing the transformative role of services in enhancing the diversity and complexity of products from Africa.</p>
          <IsVisible once>
            {(isVisible) => (
              <div className={`iframe_container full ${(isVisible && y > 200) ? 'visible' : 'not_seen'} ${anchorClicked !== false ? 'notransition' : ''}`}>
                <iframe title="The Weekly Tradecast by UNCTAD" allowtransparency="true" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=xyr2d-1269cec-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=1&size=240&skin=ffffff" allowFullScreen="" />
              </div>
            )}
          </IsVisible>
          <p>UNCTAD recommends that for export diversification strategies to be impactful in Africa, policies need to be in place that enhance inclusive access to innovative financing technologies, including for small and medium-sized enterprises.</p>
          <p>Leveraging high knowledge-intensive services to increase productivity and improve competitiveness in the private sector will be key to achieving higher value-added diversification and growth on the continent.</p>
        </div>
        <IsVisible once>
          {(isVisible) => (
            <div className="content_container">
              <div className={`iframe_container video_container ${(isVisible && y > 200) ? 'visible' : 'not_seen'} ${anchorClicked !== false ? 'notransition' : ''}`}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/EljY4vkOxX8" title="YouTube video player" className="youtube_video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
          )}
        </IsVisible>
        <IsVisible once>
          {(isVisible) => (
            <div className={`graphic_container ${(isVisible && y > 200) ? 'visible' : 'not_seen'} ${anchorClicked !== false ? 'notransition' : ''}`}>
              <div className="extra_background" />
              <div className="title_container">
                <h2>Most African countries are highly dependent on commodities</h2>
                <p>UNCTAD considers a country to be dependent on commodities when these products make up more than 60% of its total merchandise exports. Based on this definition, 83% of African countries are commodity dependent, accounting for 45% of the commodity-dependent countries worldwide.</p>
              </div>
              <div className="image_container">
                <img src={graphic1} alt="" />
              </div>
            </div>
          )}
        </IsVisible>
        <IsVisible once>
          {(isVisible) => (
            <div className={`graphic_container ${(isVisible && y > 200) ? 'visible' : 'not_seen'} ${anchorClicked !== false ? 'notransition' : ''}`}>
              <div className="extra_background" />
              <div className="image_container">
                <img src={graphic11} alt="" />
              </div>
              <div className="title_container">
                <h2>Most African countries are highly dependent on commodities</h2>
                <p>NCTAD considers a country to be dependent on commodities when these products make up more than 60% of its total merchandise exports. Based on this definition, 83% of African countries are commodity dependent, accounting for 45% of the commodity-dependent countries worldwide.</p>
              </div>
            </div>
          )}
        </IsVisible>
        <IsVisible once>
          {(isVisible) => (
            <div className={`graphic_container ${(isVisible && y > 200) ? 'visible' : 'not_seen'} ${anchorClicked !== false ? 'notransition' : ''}`}>
              <div className="quote_container" style={{ margin: '0 50px', maxWidth: '450px' }}>
                <p>I hope that this report will prove a valuable guide to policymakers to drive the export diversification of goods and services by empowering private businesses to step into new markets and thrive.</p>
                <h3 className="name">Rebeca Grynspan</h3>
                <div className="title">Secretary-General of United Nations Conference on Trade and Development</div>
              </div>
              <div className="quote_container" style={{ margin: '0 50px', maxWidth: '450px' }}>
                <p>As African countries work to rebuild their economies post COVID-19, Economic Development in Africa Report 2022 brings a new perspective on how the services sector contributes to export diversification and promotes structural change.</p>
                <h3 className="name">Benedict O. Oramah</h3>
                <div className="title">President and Chair, Board of Directors, African Export-Import Bank</div>
              </div>
            </div>
          )}
        </IsVisible>
        <div className="content_container">
          <h3>Dive in to the different chapters</h3>
          <h4>The Economic Development Report in Africa Report has three chapters. Choose the chapter of your interest for the summary and to download the full chapter.</h4>
        </div>
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
              <p>Small and medium enterprises can facilitate export di&shy;ver&shy;si&shy;fi&shy;ca&shy;tion in Africa, especially through the services sector, when supported by sound financial services or provided with access to affordable financing.</p>
            </div>
          </button>
        </div>
        <div className="chapter_navigation">
          <img className="content_image" style={{ border: '2px solid #009EDB', position: 'absolute' }} src="https://via.placeholder.com/1200x620/AEA29A/000000/?text=Placeholder%20photo" alt="" />
          <button className="chapter_selection policy" type="button" onClick={() => anchorClick(3)}>
            <div className="description">
              <div className="chapter_title_container policy">
                <h2>Conclusion and policy rec&shy;om&shy;men&shy;da&shy;tion</h2>
              </div>
              <p>The diversification of African exports and economies is the most viable means by which these countries can prosper in the global economy and survive vulnerabilities and economic uncertainties exacerbated by commodity price volatility.</p>
            </div>
          </button>
        </div>
        <div className="chapter_container" id="section1" ref={sectionRefs[0]}>
          <Chapter1 />
          <PageNavigation anchorClick={anchorClick} />
        </div>
        <div className="chapter_container" id="section2" ref={sectionRefs[1]}>
          <Chapter2 />
          <PageNavigation anchorClick={anchorClick} />
        </div>
        <div className="chapter_container" id="section3" ref={sectionRefs[2]}>
          <Chapter3 />
          <PageNavigation anchorClick={anchorClick} />
        </div>
        <div className="chapter_container" id="section4" ref={sectionRefs[3]}>
          <Chapter4 />
          <PageNavigation anchorClick={anchorClick} anchorClicked={anchorClicked} />
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
