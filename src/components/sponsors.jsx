import './styles/sponsors.css';

const titleSponsors = [
  {
    name: 'Uptiq',
    logo: 'https://drive.google.com/uc?export=view&id=1nMyMSeV2GxwmikZcm-a1LGQUEZCBNafd',
    website: 'https://www.uptiq.ai/',
  },

  {
    name: 'eQ Technologic',
    logo: 'https://drive.google.com/uc?export=view&id=1aIkXVwq1fn669OsmkKzJQ1s4je9n-Hps',
    website: 'https://www.1eq.com/',
  },
];

const coSponsors = [
  {
    name: 'Bajaj Finserv',
    logo: 'https://drive.google.com/uc?export=view&id=1aeQVY01k-PjY8Rueva06KMtd4-bHLNEs',
    website: 'https://www.bajajfinserv.in/',
  },
];

const educationSponsors = [
  {
    name: 'Imocha',
    logo: 'https://drive.google.com/uc?export=view&id=1a19W1JWRjSMKRwmQut76fbTk-S0CI3hg',
    website: 'https://www.imocha.io/',
  },
  {
    name: 'Sarvatra',
    logo: 'https://drive.google.com/uc?export=view&id=1_z5nKoWl7ka3WFbv3N6Dadt79PlLQXjC',
    website: 'https://sarvatra.tech/',
  },
  {
    name: 'Airavana',
    logo: 'https://drive.google.com/uc?export=view&id=1add614SJWsdD_MM2JPLs0HvtbxyDV0fO',
    website: 'https://airavana.ai/',
  },
];

const eventSponsors = [
  {
    name: 'AGCO',
    logo: 'https://res.cloudinary.com/job-kart/image/upload/v1678885571/AGCO_logo_nfigrk.png',
    website: 'https://www.agcocorp.com/',
  },
];

const eventSponsors2 = [
  {
    name: 'Veritas',
    logo: 'https://drive.google.com/uc?export=view&id=1KmAmtM6bhre8GCgOFMk4AXNtT2BowRbw',
    website: 'https://www.veritas.com/',
  },
];

const Other = [
  {
    name: 'Foldhealth',
    logo: 'https://drive.google.com/uc?export=view&id=17JKWKnysEwogKmsfAtLKGbj-QzHSpcAO',
    website: 'https://www.fold.health/',
  },
  {
    name: 'Zbyte',
    logo: 'https://drive.google.com/uc?export=view&id=1d9g1gGyF7fNUFaNCJqj77ADdZk77uCKQ',
    website: 'https://zbyte.io/',
  },
  {
    name: 'AlgoAnalytics',
    logo: 'https://drive.google.com/uc?export=view&id=1sQVfyycKbZt53KjD9ELH75Kc3kCThPxM',
    website: 'https://www.algoanalytics.com/',
  },
];

const Association = [
  {
    name: 'IEEE',
    logo: 'https://drive.google.com/uc?export=view&id=1efqYW5q3PWhXVXPaYv0s_zWzW2dj_EEx',
    website: 'https://pictieee.in/',
  },
  {
    name: 'ACM',
    logo: 'https://drive.google.com/uc?export=view&id=1lYLoIpQ2YYcsBi0iwbrYEtuLoyvRz-ca',
    website: 'https://pict.acm.org/',
  },
  {
    name: 'CSI',
    logo: 'https://res.cloudinary.com/job-kart/image/upload/v1678885023/CSI_Logo_blue_rmxkvy.png',
    website: 'https://www.pictcsi.com/',
  },
];

const getList1 = (sponsorsArray) => {
  const list = sponsorsArray.map((sponsor) => {
    return (
      <div className='sponsor-card'>

        {sponsor.website && (
          <a href={sponsor.website} target='_blank' rel='noopener noreferrer'>
            <div
              className='logo-container hover:border-faint_blue hover:bottom-2 group shadow-lg max-w-sm rounded-3xl hover:bg-transparent hover:text-gold   hover:scale-105 cursor-pointer  hover:shadow-light_blue hover:shadow-xl'
              style={{ backgroundImage: `url(${sponsor.logo})` }}

            ></div>
          </a>
        )}

        <p className='sponsor-name'>{sponsor.name}</p>
        <div className='sponsor-social'>
          {/* {sponsor.website && (
            <a href={sponsor.website} target='_blank' rel='noopener noreferrer'>
              <i className='fas fa-globe'></i>
            </a>
          )} */}
          {sponsor.linkedin && (
            <a href={sponsor.linkedin} target='_blank' rel='noopener noreferrer'>
              <i className='fa fa-linkedin'></i>
            </a>
          )}
          {sponsor.twitter && (
            <a href={sponsor.twitter} target='_blank' rel='noopener noreferrer'>
              <i className='fa fa-twitter'></i>
            </a>
          )}
          {sponsor.instagram && (
            <a href={sponsor.instagram} target='_blank' rel='noopener noreferrer'>
              <i className='fa fa-instagram'></i>
            </a>
          )}
          {sponsor.facebook && (
            <a href={sponsor.facebook} target='_blank' rel='noopener noreferrer'>
              <i className='fa fa-facebook'></i>
            </a>
          )}
          {sponsor.careers && (
            <a href={sponsor.careers} target='_blank' rel='noopener noreferrer'>
              <i className='fa fa-briefcase'></i>
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
const AssociationSponsorsList = getList1(Association);

export default function Sponsors() {
  return (
    <div id='sponsors' className='sponsors'>
      <div className='text-6xl font-semibold text-center text-white pb-12'>
        Sponsors
      </div>
      <h1 className='sponsors-head'>Title Sponsor</h1>
      <div className='sponsors-list  title-sponsors'>{titleSponsorsList}</div>
      <div className='sponsors-head  title-sponsors'>Co Sponsors And Concept Sponsor</div>
      <div className='sponsors-list  title-sponsors'>{coSponsorsList}</div>
      <div className='sponsors-head  title-sponsors'>CO Sponsors OF INC</div>
      <div className='sponsors-list'>{educationSponsorsList}</div>
      <div className='sponsors-head'>Impetus Sponsor</div>
      <div className='sponsors-list'>{ImpetusSponsorsList}</div>
      <div className='sponsors-head'>Pradnya Sponsor</div>
      <div className='sponsors-list'>{PradnyaSponsorsList}</div>
      <div className='sponsors-head'>Other Sponsors</div>
      <div className='sponsors-list'>{OtherSponsorsList}</div>
      <div className='sponsors-head'>In Association With</div>
      <div className='sponsors-list'>{AssociationSponsorsList}</div>
    </div>
  );
}