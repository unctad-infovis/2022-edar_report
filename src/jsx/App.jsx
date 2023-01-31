import React, { useState, useEffect, useRef } from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/scroll-into-view
import scrollIntoView from 'scroll-into-view';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

import Chapter1 from './Chapter1.jsx';
import Chapter2 from './Chapter2.jsx';
import Chapter3 from './Chapter3.jsx';
import Chapter4 from './Chapter4.jsx';
import ChapterNavigation from './ChapterNavigation.jsx';
import PageNavigation from './PageNavigation.jsx';
import SocialMediaButtons from './helpers/SocialMediaButtons.jsx';
import DownloadButton from './helpers/DownloadButton.jsx';

const analytics = window.gtag || undefined;

const appID = '#app-root-2022-edar_report';

function App() {
  const graphic1 = 'https://storage.unctad.org/2022-edar_report/assets/img/graphs/EDAR-2022-Most_African_countries_are_highly_dependent_on_commodities.png';
  const graphic2 = 'https://storage.unctad.org/2022-edar_report/assets/img/graphs/EDAR-2022-The_promise_of_fintech.png';

  const banner_img = 'https://storage.unctad.org/2022-edar_report/assets/img/EDAR-2022-banner.png';
  const banner_img_square = 'https://storage.unctad.org/2022-edar_report/assets/img/EDAR-2022-banner_square.png';

  const photo1 = 'https://storage.unctad.org/2022-edar_report/assets/img/photos/EDAR-2022-summary_photo1.jpg';

  // Data states.
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [y, setY] = useState(window.scrollY);
  const [anchorClicked, setAnchorClicked] = useState(0);
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

  // const addNavBarItems = (href, text) => {
  //   const li_item = document.createElement('li');
  //   li_item.classList.add('nav-item');
  //   const anchor = document.createElement('a');
  //   anchor.append(text);
  //   anchor.href = href;
  //   li_item.append(anchor);
  //   try {
  //     document.querySelector('.navbar-nav.ml-auto:not(.right-menu)').append(li_item);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (document.querySelector('.navbar-nav.ml-auto') !== null && window.location.href.includes('/publication/') && window.location.href.includes('/edar2022/')) {
  //     // document.querySelector('[href*="/data-visualization/economic-development-africa-report-2022"]').style.display = 'none';

  //     addNavBarItems('//unctad.org/webflyer/economic-development-africa-report-2022', 'Downloads');
  //     addNavBarItems('//unctad.org/fr/webflyer/rapport-2022-sur-le-developpement-economique-en-afrique', 'In French');
  //     addNavBarItems('//unctad.org/topic/africa/economic-development-in-africa-report', 'Full series');
  //   }
  // }, []);

  const anchorClick = (i) => {
    setAnchorClicked(i);
    sectionRefs.forEach(el => {
      el.current.style.height = 0;
      el.current.style.opacity = 0;
      el.current.style.visibility = 'hidden';
      el.current.style.position = 'absolute';
    });
    document.querySelectorAll(`${appID} .button_container`).forEach(el => el.classList.remove('selected'));
    document.querySelectorAll(`${appID} .button_container_${i}`).forEach(el => el.classList.add('selected'));

    sectionRefs[i].current.style.position = 'static';
    sectionRefs[i].current.style.visibility = 'visible';
    sectionRefs[i].current.style.height = 'auto';
    sectionRefs[i].current.style.opacity = 1;
    setTimeout(() => {
      scrollIntoView(sectionRefs[i].current, {
        align: {
          left: 0,
          leftOffset: 0,
          lockX: false,
          lockY: false,
          top: 0,
          topOffset: 100
        },
        cancellable: false,
        time: 500
      });
    }, 200);

    document.querySelectorAll(`${appID} .chapter_selection`).forEach(el => {
      el.classList.remove('nohover');
      el.classList.remove('hover');
    });

    if (typeof analytics !== 'undefined') {
      analytics('event', 'Navigation Click', {
        event_category: '2022-edar_report',
        event_label: `Chapter ${i + 1}`,
        transport_type: 'beacon'
      });
    }
  };

  return (
    <div className="app">
      <div className="background_container" />
      <div className="content_wrapper">
        <div className="banner_container">
          <img className="banner_image" src={banner_img} alt="" />
          <img className="banner_image_square" src={banner_img_square} alt="" />
        </div>
        <PageNavigation anchorClick={anchorClick} />
        <div className="heading_container">
          <img className="content_image right" src={photo1} alt="" />
          <div className="content">
            <h1>Rethinking the Foundations of Export Diversification in Africa</h1>
            <h2>Soaring food and energy prices are hitting African countries especially hard as they struggle with the impact of the COVID-19 pandemic, climate change and the war in Ukraine.</h2>
            <h2>To cope with current crises and insulate itself against future shocks, Africa must diversify its economies. The continent of 1.4 billion people is among the least diversified regions in the world with regard to exports.</h2>
            <div className="download_section">
              <DownloadButton href="//unctad.org/webflyer/economic-development-africa-report-2022" text="Download the full report" />
              <DownloadButton href="//unctad.org/fr/webflyer/rapport-2022-sur-le-developpement-economique-en-afrique" text="In French" />
              <DownloadButton href="//unctad.org/topic/africa/economic-development-in-africa-report" text="Full series" />
            </div>
          </div>
        </div>
        <div className="content_container">
          <p>Commodities account for more than 60% of total merchandise exports in 45 of the 54 countries in Africa, leaving them highly vulnerable to global commodity price shocks and undermining the continent’s inclusive growth and development prospects.</p>
          <p>UNCTAD’s Economic Development in Africa Report 2022 shows that neglecting the potentially transformative role of high knowledge-intensive services, such as information and communications technology, business services and digital financial services, is among the key reasons why export diversification remains a challenge in Africa.</p>
          <blockquote>
            <span className="text">High knowledge-intensive services can foster diversification</span>
          </blockquote>
          <p>The report shows that effectively addressing barriers to services trade under the African Continental Free Trade Area will be key to unleashing the transformative role of services in enhancing the diversity and complexity of African economies.</p>
          <IsVisible once>
            {(isVisible) => (
              <div className={`iframe_container full ${(isVisible && y > 200) ? 'visible' : 'not_seen'} ${anchorClicked !== 0 ? 'notransition' : ''}`}>
                <iframe title="The Weekly Tradecast by UNCTAD" allowtransparency="true" height="150" width="100%" scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=44n6n-12718d8-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=1&size=240&skin=ffffff" allowFullScreen="" />
              </div>
            )}
          </IsVisible>
          <p>UNCTAD recommends that for export diversification strategies to be impactful in Africa, policies need to be in place that enhance inclusive access to innovative financing technologies, including for small and medium-sized enterprises.</p>
          <p>Leveraging high knowledge-intensive services to increase productivity and improve competitiveness in the private sector will be key to achieving higher value-added diversification and growth on the continent.</p>
        </div>
        <IsVisible once>
          {(isVisible) => (
            <div className="content_container">
              <div className={`iframe_container video_container ${(isVisible && y > 200) ? 'visible' : 'not_seen'} ${anchorClicked !== 0 ? 'notransition' : ''}`}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/cWBmZWPKtZ8" title="Economic Development in Africa Report 2022" className="youtube_video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
          )}
        </IsVisible>
        <IsVisible once>
          {(isVisible) => (
            <div className={`graphic_container ${(isVisible && y > 200) ? 'visible' : 'not_seen'} ${anchorClicked !== 0 ? 'notransition' : ''}`}>
              <div className="extra_background" />
              <div className="title_container">
                <h2>83% of African countries are highly dependent on commodities</h2>
                <p>UNCTAD considers a country to be dependent on commodities when these products make up more than 60% of its total merchandise exports. Based on this definition, 83% of African countries are commodity dependent, accounting for 45% of the commodity-dependent countries worldwide.</p>
                <SocialMediaButtons text="83% of African countries are highly dependent on commodities" url="https://unctad.org/publication/economic-development-africa-report-2022" image="pic.twitter.com/vHbYkYuRaT" />
              </div>
              <div className="image_container right">
                <figure>
                  <img src={graphic1} alt="Graphic: Most African countries are highly dependent on commodities" />
                  <figcaption>Source: UNCTAD, 2021a, with updated data for the year 2020</figcaption>
                </figure>
              </div>
            </div>
          )}
        </IsVisible>
        <IsVisible once>
          {(isVisible) => (
            <div className={`graphic_container graphic_left ${(isVisible && y > 200) ? 'visible' : 'not_seen'} ${anchorClicked !== 0 ? 'notransition' : ''}`} style={{ backgroundColor: '#fff' }}>
              <div className="image_container left">
                <figure>
                  <img src={graphic2} alt="Infographic: Fintech holds promise in Africa" />
                  <figcaption>Source: FinTech Global (2022)</figcaption>
                </figure>
              </div>
              <div className="title_container">
                <h2>Fintech holds promise in Africa</h2>
                <p>The recent growth of financial technology (fintech) firms in Africa is spurring more innovation and investment opportunities. Fintech has the potential to help African countries achieve financial and social inclusion.</p>
                <SocialMediaButtons text="Fintech holds promise in Africa" url="https://unctad.org/publication/economic-development-africa-report-2022" image="pic.twitter.com/iSlJkjvG8Q" />
              </div>
            </div>
          )}
        </IsVisible>
        <IsVisible once>
          {(isVisible) => (
            <div className={`quotes_container ${(isVisible && y > 200) ? 'visible' : 'not_seen'} ${anchorClicked !== 0 ? 'notransition' : ''}`}>
              <div className="quote_container quote_container_1">
                <p>The Economic Development in Africa Report 2022 serves Africa’s effective integration into high-end global value chains. I hope that this report will prove a valuable guide to policymakers to drive the export diversification of goods and services by empowering private businesses to step into new markets and thrive.</p>
                <h3 className="name">Rebeca Grynspan</h3>
                <div className="title">Secretary-General of United Nations Conference on Trade and Development</div>
              </div>
              <div className="quote_container quote_container_2">
                <p>As African countries work to rebuild their economies post COVID-19, Economic Development in Africa Report 2022 brings a new perspective on how the services sector contributes to export diversification and promotes structural change.</p>
                <h3 className="name">Benedict O. Oramah</h3>
                <div className="title">President and Chair, Board of Directors, African Export-Import Bank</div>
              </div>
            </div>
          )}
        </IsVisible>
        <div className="content_container" style={{ textAlign: 'center', maxWidth: '530px' }}>
          <h1>Dive deeper into the chapters</h1>
          <h2>The report has four chapters. Choose a chapter to read an excerpt, see visuals and download the full chapter.</h2>
        </div>
        <ChapterNavigation anchorClick={anchorClick} appID={appID} />
        <div className="chapter_container" id="section1" ref={sectionRefs[0]}>
          <Chapter1 appID={appID} />
          <PageNavigation anchorClick={anchorClick} />
        </div>
        <div className="chapter_container" id="section2" ref={sectionRefs[1]}>
          <Chapter2 appID={appID} />
          <PageNavigation anchorClick={anchorClick} />
        </div>
        <div className="chapter_container" id="section3" ref={sectionRefs[2]}>
          <Chapter3 appID={appID} />
          <PageNavigation anchorClick={anchorClick} />
        </div>
        <div className="chapter_container" id="section4" ref={sectionRefs[3]}>
          <Chapter4 appID={appID} anchorClicked={anchorClicked} />
          <PageNavigation anchorClick={anchorClick} anchorClicked={anchorClicked} />
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
