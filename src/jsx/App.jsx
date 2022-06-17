import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'
import style from './../styles/styles.less';

// https://d3js.org/
import * as d3 from 'd3';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer'
import IsVisible from 'react-is-visible'

// https://www.highcharts.com/
// import Highcharts from 'highcharts';
// import highchartsAccessibility from 'highcharts/modules/accessibility';
// highchartsAccessibility(Highcharts);
// import highchartsExporting from 'highcharts/modules/exporting';
// highchartsExporting(Highcharts);

// Load helpers.
import formatNr from './helpers/formatNr.js';
import roundNr from './helpers/roundNr.js';

const App = () => {
  // Data states.
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const [y, setY] = useState(window.scrollY);
  const [anchorClicked, setAnchorClicked] = useState(false);
  const [data, setData] = useState(false);
  
  useEffect(() => {
    const data_file = (window.location.href.includes('unctad.org')) ? '/sites/default/files/data-file/2022-edar_report.json' : './data/data2020.json';
    try {
      d3.json(data_file).then((json_data) => {
        setData(json_data);
      });
    }
    catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
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
    sectionRefs[i].current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className={style.app}>
      <div className={style.content_wrapper}>
        <div className={style.banner_container}>
          <h1>Awesome Africa Report title 2022</h1>
          <img className={style.banner_image} src="https://baconmockup.com/1600/600" />
        </div>
        <div className={style.download_section}><a href="#">Download the full report in PDF format</a></div>
        <div className={style.page_navigation}>
          <span className={style.page_navigation_label}>Jump to:</span>
          <span className={style.button_container}><button href="#section1" onClick={() => anchorClick(0)}>Section 1</button></span>
          <span className={style.button_container}><button href="#section2" onClick={() => anchorClick(1)}>Section 2</button></span>
          <span className={style.button_container}><button href="#section3" onClick={() => anchorClick(2)}>Section 3</button></span>
        </div>
        <div className={style.container}>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <img className={style.content_image + ' ' + style.left} src="https://baconmockup.com/200/300" />
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <blockquote>
            <span className={style.text}>Hansom quote from an important person</span>
            <span className={style.author}>Teemo Tebest</span>
          </blockquote>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <h3 id="section1" ref={sectionRefs[0]}>Section 1</h3>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <div className={style.findings_container}>
            <h3>Key findings</h3>
            <ul>
              <li>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</li>
              <li>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</li>
              <li>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</li>
            </ul>
          </div>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false ? ' ' + style.notransition : '')} src="https://baconmockup.com/1600/900" />}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.right + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false ? ' ' + style.notransition : '')} src="https://baconmockup.com/200/300" />}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <blockquote>
            <span className={style.text}>Another hansom quote from an important person</span>
            <span className={style.author}>Teemo Tebest</span>
          </blockquote>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false ? ' ' + style.notransition : '')} src="https://desk.zoho.com/portal/api/uploads/4004154208415/content?portalId=bf176ef04452afb226b71d032f1e8bd25fdf45fd13ed1e6d" />}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <IsVisible once>
            {(isVisible) => <div className={style.video_container + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false ? ' ' + style.notransition : '')}><iframe src="https://www.youtube.com/embed/msizPweg3kE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowFullScreen></iframe></div>}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <div className={style.recommendations_container}>
            <h3>Policy recommendations</h3>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
          </div>
          <h3 id="section2" ref={sectionRefs[1]}>Section 2</h3>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <div className={style.findings_container}>
            <h3>Key findings</h3>
            <ul>
              <li>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</li>
              <li>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</li>
              <li>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</li>
            </ul>
          </div>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false && + style.notransition)} src="https://baconmockup.com/900/900" />}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false ? ' ' + style.notransition : '')} src="https://desk.zoho.com/portal/api/uploads/4004154208415/content?portalId=bf176ef04452afb226b71d032f1e8bd25fdf45fd13ed1e6d" />}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <div className={style.recommendations_container}>
            <h3>Policy recommendations</h3>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
          </div>
          <h3 id="section3" ref={sectionRefs[2]}>Section 3</h3>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <div className={style.findings_container}>
            <h3>Key findings</h3>
            <ul>
              <li>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</li>
              <li>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</li>
              <li>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</li>
            </ul>
          </div>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <IsVisible once>
            {(isVisible) => <img className={style.content_image + ' ' + style.full + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false ? ' ' + style.notransition : '')} src="https://desk.zoho.com/portal/api/uploads/4004154208415/content?portalId=bf176ef04452afb226b71d032f1e8bd25fdf45fd13ed1e6d" />}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <blockquote>
            <span className={style.text}>Yet another hansom quote from an important person</span>
            <span className={style.author}>Teemo Tebest</span>
          </blockquote>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <IsVisible once>
            {(isVisible) => <div className={style.video_container + ((isVisible && y > 200) ? ' ' + style.visible : ' ' + style.not_seen) + (anchorClicked !== false ? ' ' + style.notransition : '')}><iframe src="https://www.youtube.com/embed/msizPweg3kE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowFullScreen></iframe></div>}
          </IsVisible>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
          <div className={style.recommendations_container}>
            <h3>Policy recommendations</h3>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
            <div className={style.recommendation_container}>
              <p>Bacon ipsum dolor amet corned beef cupim pork strip steak, sausage ball tip shank pork loin chuck kevin salami ribeye buffalo. Landjaeger brisket pig strip steak tri-tip jerky corned beef ham short loin tail pork chuck ball tip cow tenderloin.</p>
            </div>
          </div>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
};

export default App;
