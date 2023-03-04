import './styles/sponsors.css';
import React from "react";
// import cion from "../../assets/images/cion.svg";
// import pubmatic from "../../assets/images/PubMatic_Logo.svg";
// import algoanalytics from "../../assets/images/algoanalytics.png";
// import budhani from "../../assets/images/budhani.jpeg";
// import harbinger from "../../assets/images/harbinger.png";
// import dummy from '../assets/images/logo.png'


const titleSponsors = [
  {
    name: "CION EQ",
    logo: 'https://drive.google.com/uc?export=view&id=1nMyMSeV2GxwmikZcm-a1LGQUEZCBNafd',
    website: "https://www.ciondigital.com/",
  },

  {
    name: "eQ Technologic",
    logo: 'https://drive.google.com/uc?export=view&id=1aIkXVwq1fn669OsmkKzJQ1s4je9n-Hps',
    website: "https://www.ciondigital.com/",
  },
];

const coSponsors = [
  {
    name: "Bajaj Finserve",
    logo: 'https://drive.google.com/uc?export=view&id=1aeQVY01k-PjY8Rueva06KMtd4-bHLNEs',
    website: "https://pubmatic.com/",
  },
];

const educationSponsors = [
  {
    name: "Imocha",
    logo: 'https://drive.google.com/uc?export=view&id=1a19W1JWRjSMKRwmQut76fbTk-S0CI3hg',
    website: "https://www.algoanalytics.com/",
  },
  {
    name: "Sarvatra",
    logo: 'https://drive.google.com/uc?export=view&id=1_z5nKoWl7ka3WFbv3N6Dadt79PlLQXjC',
    website: "https://www.algoanalytics.com/",
  },
  {
    name: "Airvana",
    logo: 'https://drive.google.com/uc?export=view&id=1add614SJWsdD_MM2JPLs0HvtbxyDV0fO',
    website: "https://www.algoanalytics.com/",
  },
];

const eventSponsors = [
  {
    name: "Agcocorp",
    logo: 'https://drive.google.com/uc?export=view&id=1wrcCCJ5erGljke-TKHZvPOyq84owOPDR',
    website: "https://www.ciondigital.com/",
  },
];

const eventSponsors2 = [
  {
    name: "Veritas",
    logo: 'https://drive.google.com/uc?export=view&id=1KmAmtM6bhre8GCgOFMk4AXNtT2BowRbw',
    website: "https://www.ciondigital.com/",
  },
];

const Other = [
  {
    name: "Foodhealth",
    logo: 'https://drive.google.com/uc?export=view&id=17JKWKnysEwogKmsfAtLKGbj-QzHSpcAO',
    website: "https://www.ciondigital.com/",
  },
  {
    name: "Zbyte",
    logo: 'https://drive.google.com/uc?export=view&id=1d9g1gGyF7fNUFaNCJqj77ADdZk77uCKQ',
    website: "https://www.ciondigital.com/",
  },
  {
    name: "Algorithm Analytics",
    logo: 'https://drive.google.com/uc?export=view&id=1sQVfyycKbZt53KjD9ELH75Kc3kCThPxM',
    website: "https://www.ciondigital.com/",
  },
];

const Assosiation = [
  {
    name: "IEEE",
    logo: 'https://drive.google.com/uc?export=view&id=1efqYW5q3PWhXVXPaYv0s_zWzW2dj_EEx',
    website: "https://www.ciondigital.com/",
  },
  {
    name: "ACM",
    logo: 'https://drive.google.com/uc?export=view&id=1lYLoIpQ2YYcsBi0iwbrYEtuLoyvRz-ca',
    website: "https://www.ciondigital.com/",
  },
  {
    name: "CSI",
    logo: 'https://drive.google.com/uc?export=view&id=1tGkGZC1zwSGdvW_h7meX6LIGgbCimn6G',
    website: "https://www.ciondigital.com/",
  },
];

const getList1 = (sponsorsArray) => {
  const list = sponsorsArray.map((sponsor) => {
    return (
      <div className="sponsor-card">
        <div
          className="logo-container"
          style={{ backgroundImage: `url(${sponsor.logo})` }}
        >
          {/* <img src={sponsor.logo}/> */}
        </div>
        <p className="sponsor-name">{sponsor.name}</p>
        <div className="sponsor-social">
          {sponsor.website && (
            <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe"></i>
            </a>
          )}
          {sponsor.linkedin && (
            <a href={sponsor.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          )}
          {sponsor.twitter && (
            <a href={sponsor.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
          )}
          {sponsor.instagram && (
            <a href={sponsor.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
          )}
          {sponsor.facebook && (
            <a href={sponsor.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
          )}
          {sponsor.careers && (
            <a href={sponsor.careers} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-briefcase"></i>
            </a>
          )}
        </div>
      </div>
    );
  });
  return list;
};

const titleSponsorsList = getList1(titleSponsors);
const coSponsorsList = getList1(coSponsors);
const educationSponsorsList = getList1(educationSponsors);
const ImpetusSponsorsList = getList1(eventSponsors);
const PradnyaSponsorsList = getList1(eventSponsors2);
const OtherSponsorsList = getList1(Other);
const AssosiationSponsorsList = getList1(Assosiation);

export default function Sponsors() {
  return (
    <div className="sponsors">
      <div className="text-6xl font-semibold text-center text-white pb-12">
        Sponsors
      </div>
      <h1 className="sponsors-head">Title Sponsor</h1>
      <div className="sponsors-list title-sponsors">{titleSponsorsList}</div>
      <div className="sponsors-head">Co Sponsors And Concept Sponsor</div>
      <div className="sponsors-list">{coSponsorsList}</div>
      <div className="sponsors-head">CO Sponsors OF INC</div>
      <div className="sponsors-list">{educationSponsorsList}</div>
      <div className="sponsors-head">Impetus Sponsor</div>
      <div className="sponsors-list">{ImpetusSponsorsList}</div>
      <div className="sponsors-head">Concept Sponsor</div>
      <div className="sponsors-list">{PradnyaSponsorsList}</div>
      <div className="sponsors-head">Other Sponsors</div>
      <div className="sponsors-list">{OtherSponsorsList}</div>
      <div className="sponsors-head">In Assosiation With</div>
      <div className="sponsors-list">{AssosiationSponsorsList}</div>
    </div>
  );
}


