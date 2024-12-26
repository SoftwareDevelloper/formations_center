import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../../Api";
import "../Register/register.css";
const Register = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');
  const [niveau, setNiveau] = useState(''); 
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register({nom,prenom,email,password,confirmPassword,telephone,adresse,niveau,});
      localStorage.setItem("token", data.token);
      alert("User Registered Successfully");
      window.location.href = "/login";
    } 
      catch (error){
      console.error("Error during registration:", error);}};
      return (
      <div className="register">
      <h2 className="text-center" style={{fontSize:"30px",color:"darkblue",fontWeight:"600"}}>Inscrivez-vous</h2>
      <form onSubmit={handleSignup} className="max-w-md mx-auto mt-6 p-4 bg-opacity-60 rounded-lg">
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"  required/>
          <label htmlFor="nom" className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">Nom</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
        <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"required/>
        <label htmlFor="prenom" className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">Prénom</label>
        </div>
      </div>  
       {["adresse", "telephone", "email"].map((field, index) => (
          <div key={index} className="relative z-0 w-full mb-5 group">
            <input type="text" value={ field === "adresse" ? adresse :field === "telephone" ? telephone : email} 
            onChange={(e) => {
                switch (field) {
                  case "adresse":
                    setAdresse(e.target.value);
                    break;
                  case "telephone":
                    setTelephone(e.target.value);
                    break;
                  case "email":
                    setEmail(e.target.value);
                    break;
                  default:
                    break;}}}
                    className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"required/>
            <label htmlFor={field} className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          </div>))}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="niveau"
              id="niveau"
              value={niveau}
              onChange={(e) => setNiveau(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="niveau"
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500"
            >Niveau</label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
          <div  className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="passwoerd"
              onChange={(e) => {
                setPassword(e.target.value);}}
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              required/>
            <label
              htmlFor="passoword"
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">password</label>
          </div>
          <div  className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={(e) => {setConfirmPassword(e.target.value);}}
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              placeholder=" "
              required/>
            <label
              htmlFor="confirmPassword"
              className="absolute text-sm text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500">Confirm Password</label></div></div>
           <button className="sign text-lg" onClick={handleSignup}>Valider</button>
        <div className="lgin mt-3 text-center">Already Have an account?{" "}<Link to={"/login"} className="link"> Login</Link>
        </div>
      </form>
    </div>
  );};

export default Register;
