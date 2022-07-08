import React from 'react';
import graphic5 from '../../assets/img/graphs/EDAR-2022-Fig-3-1.png';
import graphic6 from '../../assets/img/graphs/EDAR-2022-Fig-3-2.png';
import graphic7 from '../../assets/img/test/graphic6.png';

import photo5 from '../../assets/img/photos/shutterstock_2006080094-min.jpg';
// import photo6 from '../../assets/img/photos/shutterstock_1165318783-min.jpg';
// import photo7 from '../../assets/img/photos/shutterstock_1137295295-min.jpg';
// import photo8 from '../../assets/img/photos/shutterstock_1019371918-min.jpg';

function Chapter1() {
  return (
    <div>
      <div className="content_container">
        <h3>CHAPTER 1: The pulse of export diversification in Africa</h3>
        <img className="content_image right" style={{ transform: 'rotate(3deg)', border: '2px solid #AEA29A' }} src={photo5} alt="" />
        <h4>Africa is the second least diversified region after Oceania, and it has the most concentrated export structure when considering the unequal distribution of export shares over products.</h4>
        <p className="infobox">
          <strong>The Theil index</strong>
          {', '}
          a statistical measure of concentration or diversification, is used as the main indicator to identify diversification trends. Export diversification is usually measured by the number of export lines and the Theil index. Although the number of active export lines is easier to interpret, export volume can still be strongly concentrated in a few products or sectors only. Both indicators are used to illustrate diversification trends at the aggregate and sector levels. The higher the Theil index, the more unequal the export distribution, and the more concentrated the exports.
        </p>
        <h5>Diversification trends</h5>
        <p>Over the past two decades, less than half of all African countries managed to diversify their exports. Non-commodity-dependent countries are, on average, the most diversified (Theil index 4.5), followed by agricultural commodity-dependent countries (Theil index 5.7), mining commodity-dependent countries (Theil index 6.2) and fuel-dependent countries (Theil index 7).</p>
        <p>While in the 2000s, export diversification increased in 31 African countries (average improvement of -0.1186 index points), the 2010s was characterized by a reverse trend (average increase by 0.18 index points).</p>
        <p>The slowdown or reversed trend in diversification was partly due to the impact of the global financial crisis in reduced growth in the global economy, trade and investment, and the increasing industrialization of Asian countries, fuelling demand for African natural resources.</p>
        <p>The figure below illustrates within-sector diversification in 2018–2019 and the change in diversification compared with 1998–2000.</p>
      </div>
      <figure>
        <h5>Non-commodity-dependent countries boast stronger within-sector diversification</h5>
        <img className="content_image half" src={graphic6} alt="" />
        <img className="content_image half" src={graphic5} alt="" />
        <figcaption />
      </figure>
      <div className="content_container">
        <p>Non-commodity-dependent countries experienced stronger diversification trend in more complex manufacturing products (such as opticals and textiles, with increases in active export lines of 137% and 118% respectively, compared with 1998–2000) than commodity-dependent countries.</p>
        <p>Agricultural commodity-dependent countries diversified more in base metals and articles (98%) and footwear (93%), and diversification in mining commodity-dependent countries was highest in fats and oils (547% increase), footwear (309%) and articles of stone (304%).</p>
        <p>These trends suggest that while resource-dependent African countries have diversified and added new products to their export basket, diversification into sophisticated manufactured products was low.</p>
        <p><strong>The main drivers of Africa’s export diversification are:</strong></p>
        <ul>
          <li>Shorter distance between countries</li>
          <li>Lower trade costs</li>
          <li>Access to intermediate inputs</li>
          <li>Access to services</li>
          <li>The African Continental Free Trade Area as a catalyst</li>
        </ul>
        <h5>Complex and diverse products will expand export opportunities</h5>
        <p>Identifying the most feasible new products with large demand and a higher-than-average product complexity will exponentially increase the opportunities for structural change. Larger jumps in the product space towards industrial sectors can be necessary to promote structural change.</p>
        <p>Identifying the most feasible new products with large demand and a higher-than-average product complexity will exponentially increase the opportunities for structural change. Larger jumps in the product space towards industrial sectors can be necessary to promote structural change.</p>
        <p>Nevertheless, there are potential sectors with upgrading and vast new export opportunities across African countries, including machinery and mechanical appliances, electrical machinery and equipment, plastics and articles thereof and organic chemicals.</p>
        <p>Global demand for these goods provides new export and market opportunities for African countries and firms. The active provision of market intelligence and business services can increase supply and demand linkages, lower barriers to value chain and market entry, and facilitate more complex, diverse and higher-value-added exports.</p>
        <p><strong>The steps to identify feasible product diversification are:</strong></p>
        <ul>
          <li>Identify strategic products and sectors</li>
          <li>Look into demand opportunities</li>
          <li>Explore market access conditions</li>
          <li>Determine strategic policies to ensure competitiveness</li>
        </ul>
        <p>Further opportunities for African market expansion are underpinned by the benefits of intraregional trade and the potential role of the African Continental Free Trade Area.</p>
        <figure>
          <h5>Sectors with vast new export opportunities across African countries</h5>
          <img className="content_image full" src={graphic7} alt="" />
          <figcaption />
        </figure>
        <div className="download_section">
          <button type="button">Download Chapter 1 as PDF</button>
        </div>
      </div>
    </div>
  );
}

export default Chapter1;
