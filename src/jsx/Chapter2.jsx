import React from 'react';

import SocialMediaButtons from './helpers/SocialMediaButtons.jsx';
import DownloadButton from './helpers/DownloadButton.jsx';

// import graphic1 from '../../assets/img/graphs/EDAR-2022-Service_exports_in_Africa_in_2005.png';
const graphic1 = '//unctad.org/sites/default/files/2022-07/EDAR-2022-Service_exports_in_Africa_in_2005.png';
// import graphic2 from '../../assets/img/graphs/EDAR-2022-Service_exports_in_Africa_in_2019.png';
const graphic2 = '//unctad.org/sites/default/files/2022-07/EDAR-2022-Service_exports_in_Africa_in_2019.png';
// import graphic3 from '../../assets/img/graphs/EDAR-2022-Traditional_services_leading_even_in_countries_making_diversification_progress.png';
const graphic3 = '//unctad.org/sites/default/files/2022-07/EDAR-2022-Traditional_services_leading_even_in_countries_making_diversification_progress.png';

// import photo1 from '../../assets/img/photos/EDAR-2022-chapter2_photo1.jpg';
const photo1 = '//unctad.org/sites/default/files/2022-07/EDAR-2022-chapter2_photo1.jpg';

function Chapter2() {
  return (
    <div>
      <div className="heading_container">
        <img className="content_image right" src={photo1} alt="" />
        <div className="content">
          <h1>2. Trade in services: A niche for export diversification in Africa</h1>
          <h2>Services play a critical role in global and regional value chains and international trade. They represent the main source of value added in total trade, as they contribute to the physical and digital connectivity of all sectors within and across economies.</h2>
          <div className="download_section">
            <DownloadButton href="//unctad.org/system/files/official-document/aldcafrica2022_Ch2_en.pdf" text="Download Chapter 2" />
          </div>
        </div>
      </div>
      <div className="content_container">
        <p>The development of trade in services enhances inclusive growth by reducing poverty and inequality and fosters the achievement of Agenda 2063 and the Sustainable Development Goals.</p>
        <p>Africa can leverage trade in services to diversify economic activities into new and potentially transformative sectors.</p>
        <h3>Traditional services dominant</h3>
        <p>Trade in services is low in Africa, accounting for an average share of 17% of the continent’s exports. Travel and transport represented about two thirds of services exports, confirming a high concentration of traditional service sectors.</p>
        <p>In comparison, high-income countries rely mostly on high-knowledge intensive services, such as financial, business, insurance or intellectual property services. In Africa, high knowledge-intensive services represent only 20% of total services exports.</p>
        <p>Traditional services don’t have a direct impact on the complexity and diversity of the export basket, which is seen to increase with high knowledge-intensity services such as ICT.</p>
      </div>
      <figure>
        <h3>Travel and transport dominate Africa&apos;s services exports</h3>
        <div className="content_image half">
          <img className="" src={graphic1} alt="Graphic: Service exports in Africa in 2005" />
        </div>
        <div className="content_image half">
          <img className="" src={graphic2} alt="Graphic: Service exports in Africa in 2019" />
        </div>
        <figcaption>Source: UNCTAD calculations, based on data from the Balanced Trade in Services database of the Organisation for Economic Co-operation and Development and the World Trade Organization</figcaption>
        <SocialMediaButtons text="Service exports in Africa in 2019" url="url" image={graphic2} />
      </figure>
      <div className="content_container">
        <p>Some countries have made progress in diversifying their services. In 2005–2019, the top three services sectors represented less than 70% of total exports in services in five countries: Burkina Faso, Kenya, Malawi, Senegal and Sierra Leone.</p>
        <p>Exports in services remain dominated by travel and transport in most African countries, except in a few countries such as Malawi, where the primary services sector is telecommunications, representing one fourth of total exports in services.</p>
      </div>
      <figure>
        <h3>Traditional services leading even in countries making diversification progress</h3>
        <img className="content_image full" src={graphic3} alt="Graphic: Traditional services leading even in countries making diversification progress" />
        <figcaption>Source: UNCTAD, based on data from the Balanced Trade in Services database of the Organisation for Economic Co-operation and Development and the World Trade Organization.</figcaption>
        <SocialMediaButtons text="Traditional services leading even in countries making diversification progress" url="url" image={graphic3} />
      </figure>
      <div className="content_container">
        <p>The key factors undermining trade in services in Africa include:</p>
        <ul>
          <li>The high cost of trade in services</li>
          <li>Protectionist policies and measures</li>
          <li>Infrastructure and equipment issues</li>
          <li>Low levels of digitalization and technology</li>
          <li>Difficult access to financial services</li>
          <li>Poor regional integration</li>
          <li>A limited competitive environment</li>
        </ul>
        <h3>Lead role of the private sector</h3>
        <p>The role of the private sector in diversifying and upgrading export patterns, in attracting investment in growth sectors or in stimulating innovation in domestic industries, productivity and exports has helped develop and strengthen the economic fibre of many advanced countries and emerging markets.</p>
        <p>Small and medium enterprises (SMEs) in particular have an increasing potential in facilitating trade in services and hence, the development of value chains in Africa. They represent about 90% of enterprises in the region and employ about 60% of the workforce.</p>
        <p>African SMEs can create more opportunities for sustained growth, trade diversification and competitiveness in high value added and growth services sectors, such as tourism and travel, as well as ICT services.</p>
        <p>But multiple barriers are constraining this potential role of African SMEs. Africa, today, has about 50 million formal SMEs, which can help diversify its exports. However, SMEs have an unmet financing need of $416 billion every year, according to the International Finance Corporation.</p>
        <p>Firms, in particular new entrants and small-scale exporting companies, need to secure external financing to cover the large costs of entering export markets.</p>
        <div className="download_section">
          <DownloadButton href="//unctad.org/system/files/official-document/aldcafrica2022_Ch2_en.pdf" text="Download Chapter 2" />
        </div>
      </div>
    </div>
  );
}

export default Chapter2;
