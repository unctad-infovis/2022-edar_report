import React from 'react';
import graphic9 from '../../assets/img/test/graphic9.png';
import graphic10 from '../../assets/img/test/graphic10.png';

function Chapter3() {
  return (
    <div>
      <div className="content_container">
        <h3>CHAPTER 3: Financial services and private sector: The future of export diversification in Africa</h3>
        <h4>Small and medium-sized enterprises (SMEs) can facilitate export diversification in Africa, especially through the services sector, when supported by sound financial services or provided with access to affordable financing.</h4>
        <p>The financial system in Africa mainly revolves around the banking sector, which accounts for more than 90% of financial sector assets. The current structure of bank sector financing may not be suitable for small firms’ growth and export performance, which requires tailored financing mechanisms.</p>
        <p>These include venture capital and business angels, and financial technologies (fintech) that can improve traditional credit channels and offer other promising channels to bridge the financing gaps of micro, small and medium-sized enterprises. </p>
        <p>Alternative finance can help to bridge the investment gap for start-ups and SMEs.</p>
        <h5>The promise of fintech</h5>
        <p>Fintech has the potential to help African countries achieve financial and social inclusion by decreasing inefficiencies in resource allocation within the traditional banking sector and offering economic opportunities that promote financial access and social development.</p>
        <p>Although fintech has been spreading in Africa, reaching over $2 billion in investments in 2021 (Figure 24), it has yet to reach the development stage, in which economies can leverage it to support the financing of valued added productive activities.</p>
        <p>For example, mobile money, the most commonly used financial technology in Africa, is only being utilized to advance short-term microloans to users.</p>
      </div>
      <figure>
        <img className="content_image full" src={graphic9} alt="" />
        <figcaption>Figure: Agricultural commodity-dependent countries diverse more slowly than mining commodity dependent countries.</figcaption>
      </figure>
      <div className="content_container">
        <p>Sectors that dominate the African fintech industry are payments and remittances, marketplace lending and wealth technology, accounting respectively for 26%, 19% and 14% of all transactions in 2021.</p>
        <p>A company worthy of mention in the payments and remittances sector is OPay, a Nigerian-based point of sale platform and mobile payment service that raised $400 million in 2021. It boasts 160 million active users, expanding access to the large unbanked population in Nigeria.</p>
        <p>In the marketplace lending sector, MNT-Halan, an Egyptian-based non-bank lender and payments platform, raised $120 million in 2021 on the back of new regulation and support measures introduced by the Central Bank of Egypt to strengthen the fintech market.</p>
      </div>
      <figure>
        <img className="content_image full" src={graphic10} alt="" />
        <figcaption>Figure: Agricultural commodity-dependent countries diverse more slowly than mining commodity dependent countries.</figcaption>
      </figure>
      <div className="content_container">
        <h5>Challenges to be tackled</h5>
        <p>Nonetheless, fintech doesn’t come without risks. Due to the innovativeness, opacity and complexities associated with fintech business models, with which users may be unfamiliar, there is often a heightened risk of loss from fraudulent activities or misconduct by operators and/or other third parties.</p>
        <p>Other identified risks include poor governance or process control, which can disrupt provision of financial services or critical infrastructure and cyberattacks on financial activity and risk contagion effects on other interconnected financial institutions.</p>
        <p>Additional risks include uncertainty concerning liability for losses, especially in the absence of sound legal and regulatory arbitrage systems, which can negatively affect the confidence of investors and businesses in the system, and excessive volatility of some fintech services or business models.</p>
        <blockquote>
          <span className="text">Finance and IT sector amounts 44% of private capital deals</span>
        </blockquote>
        <p>Policies and regulations relating to fintech haven’t yet been established in most African countries, which limits the ability of jurisdictions to efficiently tackle these risks, thus reducing the prospects to realize the diversification-inducing potential of fintech and alternative finance.</p>
        <p>Addressing some of the hurdles to seed and start-up financing for SMEs or putting in place legal frameworks and regulatory infrastructure that can foster tailored innovative financing structures and instruments for SMEs will be important enabling factors for export diversification.</p>
        <p>When accompanied by appropriate regulatory frameworks, fintech can increase SMEs’ access to long-term financing, so that funds can also flow more readily into this traditionally neglected but promising sector. </p>
        <p>Stronger protection of property rights and rule-based governance, in addition to guaranteeing a level playing field for enterprises – especially SMEs – to compete, are prerequisites for promoting export diversification.</p>
        <div className="download_section">
          <button type="button">Download full chapter 3</button>
        </div>
      </div>
    </div>
  );
}

export default Chapter3;
