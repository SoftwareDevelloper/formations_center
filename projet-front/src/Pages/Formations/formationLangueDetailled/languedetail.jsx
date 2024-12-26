import React from "react";
import { useParams } from "react-router-dom";
import LangueFormations from "../../../Assest/LangueFormation";

const Languedetail = () => {
  const { id } = useParams();
  const formation = LangueFormations.find((item) => item.id === parseInt(id));

  if (!formation) {
    return (
      <p className="flex justify-center items-center h-screen text-2xl text-gray-200 bg-gradient-to-br from-black to-gray-900">
        Formation not found.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-gray-900 p-8 text-white">
      <div className="max-w-5xl mx-auto bg-gradient-to-t from-gray-800 to-gray-700 rounded-xl shadow-lg overflow-hidden">
        <br /><br />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={formation.image}
              alt={formation.title}
              className="w-full h-90 object-cover"
            />
          </div>
          {/* Description */}
          <div className="w-full md:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-4">{formation.title}</h1>
            <p className="text-gray-200 leading-relaxed mb-6">
              {formation.discription2}
            </p>
            <p className="text-white" style={{fontSize:"20px"}}>
              <span className="font-semibold text-red-800">Durée:</span>{" "}
              Probable
            </p>
            <p className="text-white" style={{fontSize:"20px"}}>
              <span className="font-semibold text-red-800">Modalités:</span>{" "}
              En ligne ou en présentiel
            </p>
            <p className="text-red-900 mt-4 font-semibold " style={{fontSize:"18px"}}>
              Inscrivez-vous et boostez vos compétences linguistiques !
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-gradient-to-t from-gray-800 to-gray-700 rounded-xl shadow-lg p-8 mt-8">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Formulaire d'Inscription
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-white mb-1">Nom</label>
            <input
              type="text"
              name="nom"
              required
              className="w-full p-3 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-white mb-1">Prenom</label>
            <input
              type="text"
              name="prenom"
              required
              className="w-full p-3 rounded-full bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-full bg-white text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">
              Numéro Téléphone
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full p-3 rounded-full bg-white text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-white mb-1">
              Niveau {formation.title} Actuel
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="level"
                  value="Débutant"
                  className="form-radio text-blue-500"
                />
                <span>Débutant</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="level"
                  value="Intermédiaire"
                  className="form-radio text-blue-500"
                />
                <span>Intermédiaire</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="level"
                  value="Avancé"
                  className="form-radio text-blue-500"
                />
                <span>Avancé</span>
              </label>
            </div>
          </div>

         

          {/* Submit Button */}
          <button
            type="submit"
            className="exploreNow" 
            style={{width:"1300px", fontSize:"25px",height:"60px"}}
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default Languedetail;
