import './styles/sponsors.css';
import React from "react";
// import cion from "../../assets/images/cion.svg";
// import pubmatic from "../../assets/images/PubMatic_Logo.svg";
// import algoanalytics from "../../assets/images/algoanalytics.png";
// import budhani from "../../assets/images/budhani.jpeg";
// import harbinger from "../../assets/images/harbinger.png";
import dummy from '../assets/images/logo.png'


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
    name: "CION Digital",
    logo: dummy,
    website: "https://www.ciondigital.com/",
  },
];

const foodSponsors = [
  {
    name: "Budhani Bros Waferwala",
    logo: dummy,
    website: "https://www.budhanibros.com/",
    instagram: "https://www.instagram.com/budhanibroswaferwala/"
  }
]

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
const eventSponsorsList = getList1(eventSponsors);
const foodSponsorsList = getList1(foodSponsors);

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
      <div className="sponsors-head">Event Sponsors</div>
      <div className="sponsors-list">{eventSponsorsList}</div>
      <div className="sponsors-head">Food Partners</div>
      <div className="sponsors-list">{foodSponsorsList}</div>
    </div>
  );
}


