import React from 'react';
// https://github.com/joshwnj/react-visibility-sensor
import VisibilitySensor from 'react-visibility-sensor';
// https://www.npmjs.com/package/react-countup
import CountUp from 'react-countup';

import SocialMediaButtons from './helpers/SocialMediaButtons.jsx';
import DownloadButton from './helpers/DownloadButton.jsx';

function Chapter() {
  const graphic1 = 'https://storage.unctad.org/2022-edar_report/assets/img/graphs/EDAR-2022-Investment_in_African_fintech_firms_shot_up_in_2021.png';
  const graphic2 = 'https://storage.unctad.org/2022-edar_report/assets/img/graphs/EDAR-2022-Payments_and_remittances_dominate_African_fintech_industry.png';

  const photo1 = 'https://storage.unctad.org/2022-edar_report/assets/img/photos/EDAR-2022-chapter3_photo1.jpg';

  return (
    <div>
      <div className="heading_container">
        <img className="content_image right" src={photo1} alt="" />
        <div className="content">
          <h1>3. Financial services and private sector: The future of export diversification in Africa</h1>
          <h2>Private businesses, particularly small and medium-sized enterprises (SMEs), can facilitate high value-added export diversification in Africa, especially through the services sector, when supported by sound financial services or provided with access to affordable financing.</h2>
          <div className="download_section">
            <DownloadButton href="//unctad.org/system/files/official-document/aldcafrica2022_Ch3_en.pdf" text="Download Chapter 3" />
          </div>
        </div>
      </div>
      <div className="content_container">
        <p>The current structure of the financial system in Africa, which mainly revolved around the banking sector, may not be suitable for SMEs’ growth and export performance, which requires tailored financing mechanisms.</p>
        <p>These include private capital investment and financial technology (fintech) that can improve access to affordable credit and offer other promising channels to bridge the financing gaps of start-ups and SMEs.</p>
        <h3>The promise of fintech</h3>
        <p>Fintech has the potential to help African countries achieve financial and social inclusion by decreasing inefficiencies in resource allocation within the traditional banking sector and offering economic opportunities that promote financial access and social development.</p>
        <p>Although fintech has been spreading in Africa, reaching over $2 billion in investments in 2021, it has yet to reach the development stage, in which economies can leverage it to support the financing of valued added productive activities.</p>
        <p>For example, mobile money, the most commonly used financial technology in Africa, is only being utilized to advance short-term microloans to users.</p>
      </div>
      <figure>
        <h3>Investment in African fintech firms shot up in 2021</h3>
        <img className="content_image full" src={graphic1} alt="Graphic: Investment in African fintech firms shot up in 2021" />
        <figcaption>Source: UNCTAD, based on data from Fintech Global, 2022</figcaption>
        <SocialMediaButtons text="Investment in African fintech firms shot up in 2021" url="https://unctad.org/publication/economic-development-africa-report-2022" image="pic.twitter.com/iBAU9AW362" />
      </figure>
      <div className="content_container">
        <p>Sectors that dominate the African fintech industry are payments and remittances, marketplace lending and wealth technology, accounting respectively for 26%, 19% and 14% of all transactions in 2021.</p>
        <p>In advanced economies, the adoption and increased use of emergent digital technologies, such as artificial intelligence, the internet of things (IoT), big data, blockchain, robotics, drones, gene editing, and nanotechnology are transforming industries and revolutionizing business processes and financial services.</p>
        <p>The growth of financial technology-powered financing models opens new avenues of funding for businesses and can help address the credit constraints faced by exporting firms.</p>
        <p>The use of financial technologies such as blockchain, digital banking, and cloud computing are enabling the financial services industry to transform and scale its services and products to tailor to the financing needs of a larger number of customers and across a wider range of sectors and markets.</p>
        <p>Agritech technologies such as biotechnology, novel materials, photonics, big data and IoT can be used to address low value-added productivity in the agricultural sector or scale viable, green, low-carbon solutions in agro-processing.</p>
        <p>The use of more innovative technologies in logistics management solutions are contributing to making supply chains more customer-centric and sustainable. Applying technology-driven solutions to logistics processes results in increased productivity and efficiency in the workflow.</p>
      </div>
      <figure>
        <h3>Payments and remittances dominate Africa&apos;s fintech industry</h3>
        <img className="content_image full" src={graphic2} alt="Graphic: Payments and remittances dominate Africa&apos;s fintech industry" />
        <figcaption>Source: UNCTAD, based on data from Fintech Global, 2022.</figcaption>
        <SocialMediaButtons text="Payments and remittances dominate Africa&apos;s fintech industry" url="https://unctad.org/publication/economic-development-africa-report-2022" image="pic.twitter.com/fGvmp74maQ" />
      </figure>
      <div className="content_container">
        <h3>Challenges to be tackled</h3>
        <p>Nonetheless, fintech doesn’t come without risks. Due to the innovativeness, opacity and complexities associated with fintech business models, with which users may be unfamiliar, there is often a heightened risk of loss from fraudulent activities or misconduct by operators and/or other third parties.</p>
        <p>Other identified risks include poor governance or process control, which can disrupt provision of financial services or critical infrastructure and cyberattacks on financial activity and risk contagion effects on other interconnected financial institutions.</p>
        <p>Additional risks include uncertainty concerning liability for losses, especially in the absence of sound legal and regulatory arbitrage systems, which can negatively affect the confidence of investors and businesses in the system, and excessive volatility of some fintech services or business models.</p>
        <blockquote>
          <span className="text">
            Finance and IT sectors take
            <span className="highlight">
              <VisibilitySensor>
                {({ isVisible }) => (
                  <span style={{ height: 19, display: 'inline-block', width: 35 }}>
                    {isVisible ? <CountUp delay={0} end={44} start={0} duration={3} /> : null}
                  </span>
                )}
              </VisibilitySensor>
              %
            </span>
            {' '}
            of private capital deals
          </span>
        </blockquote>
        <p>Policies and regulations relating to fintech haven’t yet been established in most African countries, which limits the ability of jurisdictions to efficiently tackle these risks, thus reducing the prospects to realize the diversification-inducing potential of fintech and alternative finance.</p>
        <p>Addressing some of the hurdles to seed and start-up financing for SMEs or putting in place legal frameworks and regulatory infrastructure that can foster tailored innovative financing structures and instruments for SMEs will be important enabling factors for export diversification.</p>
        <p>When accompanied by appropriate regulatory frameworks, fintech can increase SMEs’ access to long-term financing, so that funds can also flow more readily into this traditionally neglected but promising sector.</p>
        <p>Stronger protection of property rights and rule-based governance, in addition to guaranteeing a level playing field for enterprises – especially SMEs – to compete, are prerequisites for promoting export diversification.</p>
        <div className="download_section">
          <DownloadButton href="//unctad.org/system/files/official-document/aldcafrica2022_Ch3_en.pdf" text="Download Chapter 3" />
        </div>
      </div>
    </div>
  );
}

export default Chapter;
