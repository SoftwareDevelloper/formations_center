import React from 'react'
import '../about/about.css'
import img from '../about/Business woman at the office working on a laptop.png'
const about = () => {
  return (
    <div className='about'>
        <div className='items-center  text-white md:flex   Banner'>
        <div className="right">
            <h1 className="title">A Propos Nous</h1>
             <p className="paraph1">Bienvenue chez DIGILANG ACADEMY, votre partenaire dans les formations en informatique et en langues. 
            Notre mission est de vous offrir des formations de qualité, adaptées à vos besoins, qu'il s'agisse de 
            développement de compétences techniques ou linguistiques.</p>
             
            
        </div>
        <div className="left">
            <img src={img} alt="" />
        </div>
    </div>

    <div className='items-center  text-white md:flex   Banner2'>
        <div className="right2">
            <h1 className="title2">Nos formations</h1>
            <ul className='list'>
                <li className='list'><span className='span'>Informatique :</span> Programmation, cybersécurité, développement web, etc.</li>
                <li className='list'><span className='span'>Langues :</span> Cours d’anglais, de français, et plus.</li>
            </ul>
        </div>
        <div className="left2">
            <img src={img} alt="" />
        </div>
    </div>
      <span className='Rejoindre'>Rejoignez-nous pour développer vos compétences et atteindre vos objectifs professionnels !</span>
    </div>
  )
}

export default about
