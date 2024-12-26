import React from 'react';
import { useNavigate } from 'react-router-dom';
import InfoFormations from '../../../Assest/InfoFormations';
import BannerInfo from '../Banners/InfoBanners.png';
import '../info/info.css';

const Info = () => {
  const navigate = useNavigate();

  const viewDetails = (id) => {
    navigate(`/Informatique/${id}`);
  };

  return (
    <>
      {/* Banner Section */}
      <div className="infoBanner">
        <div className="imgbanner">
          <img src={BannerInfo} alt="Banner Informatique" />
        </div>
        <div className="textBanner">
          <h1>Formations en Informatique :</h1>
          <h2>Devenez Expert</h2>
          <h3>
            Découvrez nos formations en informatique et commencez votre aventure
            technologique
          </h3>
        </div>
      </div>

      {/* Formations Section */}
      <div className="InfoFormation">
        {InfoFormations.map((item, index) => (
          <div
            className="item"
            key={index}
            onClick={() => viewDetails(item.id)} // Navigate on item click
          >
            <img src={item.image} alt={item.Title} />
            <h3>{item.Title}</h3>
            <p>{item.discription}</p>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <button className="exploreNow" onClick={() => navigate('/ExploreMore')}>
        Explore more
      </button>
    </>
  );
};

export default Info;
