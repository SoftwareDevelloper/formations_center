import React from 'react';
import { useNavigate } from 'react-router-dom';
import LangueFormation from '../../../Assest/LangueFormation'; 
import BannerLangue from '../Banners/LangueBanner.png';
import '../langue/langue.css';

const Langue = () => {
  const navigate = useNavigate();

  const viewDetails = (id) => {
    navigate(`/Langue/${id}`);
  };

  return (
    <>
      <div className="LangueBanner">
        <div className="imgbanner">
          <img src={BannerLangue} alt="Banner for Langue" />
        </div>
        <div className="textBanner">
          <h1>Découvrir le monde des langues,</h1>
          <h2>Commençons</h2>
          <h2>ensemble!</h2>
        </div>
      </div>

      <div className="LangueFormation">
        {LangueFormation.map((item, index) => (
          <div
            className="item"
            key={index}
            onClick={() => viewDetails(item.id)} 
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.discription}</p> 
          </div>
        ))}
      </div>

      <button type="button" className="exploreNow">
        Explore more
      </button>
    </>
  );
};

export default Langue;
