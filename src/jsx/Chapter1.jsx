import React from 'react';
import graphic5 from '../../assets/img/test/graphic5.png';
import graphic6 from '../../assets/img/test/graphic6.png';

function Chapter1() {
  return (
    <div>
      <div className="content_container">
        <h3>CHAPTER 1: The pulse of export diversification in Africa</h3>
        <h4>Africa is the second least diversified region after Oceania, and it has the most concentrated export structure when considering the unequal distribution of export shares over products.</h4>
        <p className="infobox">
          <strong>The Theil index</strong>
          {', '}
          a statistical measure of concentration or diversification, is used as the main indicator to identify diversification trends. Export diversification is usually measured by the number of export lines and the Theil index. Although the number of active export lines is easier to interpret, export volume can still be strongly concentrated in a few products or sectors only. Both indicators are used to illustrate diversification trends at the aggregate and sector levels. The higher the Theil index, the more unequal the export distribution, and the more concentrated the exports.
        </p>
        <h5>Diversification trends</h5>
        <p>Over the past two decades, less than half of all African countries managed to diversify their exports. Non-commodity-dependent countries are, on average, the most diversified (Theil index 4.5), followed by agricultural commodity-dependent countries (Theil index 5.7), mining commodity-dependent countries (Theil index 6.2) and fuel-dependent countries (Theil index 7). </p>
        <p>Although mining commodity-dependent countries export on average more products than agricultural commodity-dependent countries (on average 1,829 and 1,410 export lines, respectively), the share of export products is much more concentrated in mining commodity-dependent countries. Between 1998–2000 and 2018–2019, some fuel-dependent countries experienced relatively strong diversification trends.</p>
        <p>In the figure below illustrates within-sector diversification in 2018–2019 and the change in diversification compared with 1998–2000.</p>
      </div>
      <figure>
        <img className="content_image full" src={graphic5} alt="" />
        <figcaption>Figure: Agricultural commodity-dependent countries diverse more slowly than mining commodity dependent countries.</figcaption>
      </figure>
      <div className="content_container">
        <p>Non-commodity-dependent countries experienced the strongest diversification trend in opticals, followed by textiles (increase in active export lines of 137% and 118%, respectively, compared with 1998–2000). </p>
        <p>Fuel-dependent countries diversified more in miscellaneous manufactured articles (252% increase in export lines) and articles of stone (246%). </p>
        <p>Agricultural commodity-dependent countries diversified more in base metals and articles (98%) and footwear (93%), and diversification in mining commodity-dependent countries was highest in fats and oils (547% increase), footwear (309%) and articles of stone (304%).</p>
        <p>These trends suggest that while resource-dependent African countries have diversified and added new products to their export basket, diversification was higher within commodities, compared with sophisticated manufactured products, where diversification was low.</p>
        <p>The main drivers of Africa’s export diversification are:</p>
        <ul>
          <li>Shorter distance between countries</li>
          <li>Lower trade costs</li>
          <li>Access to intermediate inputs</li>
          <li>Access to services</li>
          <li>The African Continental Free Trade Area as a catalyst</li>
        </ul>
        <h5>Product diversification export opportunities</h5>
        <p>The potential sectors of product diversification vary widely across countries, based on their current productive capabilities and position in the product space. Nevertheless, there are some common sectors with vast new export opportunities across African countries.</p>
        <p>Owing to their potential for upgrading, large unit values and favourable market conditions, the sectors with the best prospects for new export opportunities in value are machinery and mechanical appliances, electrical machinery and equipment, plastics and articles thereof and organic chemicals. </p>
        <p>Though in different products and unit values, an assessment of feasible product diversification opportunities reveals that all countries have some potential for export diversification into all these sectors through relatively small jumps.</p>
        <p>Importantly, the values reported in figure 17 refer to the global increase in imports of the products, explaining the large opportunity values of export diversification. Hence, other countries that produce those goods also compete for the same expanding market. </p>
        <p>Nevertheless, the large demand for these goods provides new export opportunities for African countries and firms.</p>
        <figure>
          <img className="content_image full" src={graphic6} alt="" />
          <figcaption>Figure: </figcaption>
        </figure>
        <div className="download_section">
          <button type="button">Download Chapter 1 as PDF</button>
        </div>
      </div>
    </div>
  );
}

export default Chapter1;
