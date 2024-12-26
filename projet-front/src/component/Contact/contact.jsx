import React from 'react'
import map from '../Contact/Assets/map.png'
import '../Contact/contact.css'
const Contact = () => {
    return (
    <div className="contact-section">
        <div className="map-container">
            <img src={map} alt="" />
        </div>
        <div className="contact-info">
            <h2>Contactez-Nous</h2>
            <div className="contact-item">
                <span role="img" aria-label="phone">📞</span>
                +216 58 980 803
            </div>
            <div className="contact-item">
            <span role="img" aria-label="email">✉️</span>
            jehalinesrin91@gmail.com
            </div>
        </div>
    </div>
  )
}

export default Contact
