import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { fetchFormationByApprenantId, GetApprenantByemail, UpdatePassword } from "../../Api";

import "./profil.css";

const Profile = () => {
  const [formations, setFormations] = useState([]);
  const [apprenantDetails, setApprenantDetails] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword,setconfirmPassword]=useState("");
  const [loading, setLoading] = useState(true);
  const [error ] = useState(null);
  const token = localStorage.getItem("token");
  try {
    const decodedToken = jwtDecode(token);

    console.log("Decoded Token:", decodedToken);
  } catch (error) {
    console.error("Error decoding token:", error.message);
  }
  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const email = decodedToken.sub; 

        if (!email) throw new Error("Invalid token data.");

        const apprenantResponse = await GetApprenantByemail(email);
        setApprenantDetails(apprenantResponse.data || {});
        const formationResponse = await fetchFormationByApprenantId(email);
        setFormations(formationResponse.data || []);
        
      } catch (err) {
        console.error("Error fetching data:", err);
        //setError("Failed to load apprenant details.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      alert("Please fill in both password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const data = {
        email: apprenantDetails.email,
        newPassword: newPassword,
      };

      const response = await UpdatePassword(data);
      console.log("Password updated successfully:", response);
      alert("Password updated successfully!");
    } catch (err) {
      console.error("Error updating password:", err);
      alert("Failed to update password.");
    }
  };


  if (loading) return <div className="text-center text-white">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="text-white" style={{marginTop:'6%'}}>
      <main className="mt-12 w-full max-w-4xl mx-auto">
        <div className="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mx-auto">
          <svg
            className="absolute w-18 h-18 text-gray-400 -left-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="text-white space-y-4 text-left mx-auto mt-8">
          <span style={{color:"darkblue",fontSize:"20px"}}>Nom: </span> <span style={{fontSize:"18px"}}>{apprenantDetails.nom}</span>
          <br />
          <span style={{color:"darkblue",fontSize:"20px"}}>Prénom: </span><span style={{fontSize:"18px"}}>{apprenantDetails.prenom }</span>
          <br />
          <span style={{color:"darkblue",fontSize:"20px"}}>Email: </span><span style={{fontSize:"18px"}}>{apprenantDetails.email }</span>
          <br />
          <span style={{color:"darkblue",fontSize:"20px"}}>Téléphone: </span><span style={{fontSize:"18px"}}>{apprenantDetails.telephone }</span>
          <br />
          <span style={{color:"darkblue",fontSize:"20px"}}>Adresse: </span><span style={{fontSize:"18px"}}>{apprenantDetails.adresse }</span><br />
        <button className="deconnecter" onClick={() => {localStorage.removeItem("token");alert("Déconnecté avec succès");window.location.href = "/";}} >Deconnextion</button>
        </div>

        {/* Display formations */}
        <div className="historiqueFormation mt-10">
          <h3 className="text-darkred font-fantasy font-bold text-center tracking-wide text-2xl">
            Historique de Formations
          </h3>
          <div >
            {formations.length > 0 ? (
              formations.map((formation, index) => (
                <div key={index} className="formation-card shadow-lg p-4 mb-4 bg-gray-800 rounded-lg">
                  <h4 className="text-xl text-white">{formation.title}</h4>
                  <p className="text-sm text-gray-300">{formation.durée}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400"></p>
            )}
          </div>
        </div>
        
     <div className="mt-5">
          <h2 className="text-2xl mb-4 text-center justify-center">Modifier le mot de passe</h2>
          <form onSubmit={handleSubmit}>
            
            <div>
              <label htmlFor="new-password" className="block text-white">Votre nouveau mot de passe</label>
              <input type="password" id="new-password"  value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-white">confirmer votre mot de passe</label>
              <input type="password" id="confirm-password"  value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer" />
            </div>
            <button type="submit" className="text-white update"> Mettre à jour</button>
          </form>
        </div>
        
      </main>
    </div>
  );
};

export default Profile;
