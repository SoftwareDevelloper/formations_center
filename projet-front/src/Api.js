import axios from 'axios';

const API_URL = "http://localhost:9000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("API URL:", API_URL);


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const register = (data) => 
  api.post("/Apprenant/register", data)
    .then(response => {
      console.log("Registration successful", response.data);
      alert("Registered Successfully")
      console.log("Token:", localStorage.getItem("token"));
      return response.data; 
    })
    .catch(error => {
      console.error("Registration error:", error.response?.data || error.message);
      throw error; 
    });



export const login = (data) =>
  api.post("/Apprenant/login", data)
.then(response => {
  console.log("Full API Response:", response); 
  console.log("Login successful", response.data); 

  
  return response.data; 
})
.catch(error => {
  console.error("Login error:", error.response?.data || error.message); 
  throw error;
});

export const fetchCourses = () => api.get(`/Formations/ConsulterFormationsCatalogue`);

export const fetchCourseByid = (id) => api.get(`/Formations/ConsulterFormation/${id}`);

export const updateFormations = (id, data) => api.put(`/Formations/UpdateFormations/${id}`, data);

export const deleteFormations = (id) => api.delete(`/Formations/deleteFormations/${id}`);

export const fetchFormationByApprenantId= (id) =>api.get(`/Apprenant/formations/${id}`);

export const GetApprenantByemail = (email) =>api.get(`/Apprenant/GetApprenantByemail/${email}`);

export const UpdatePassword = (email,data) =>api.put(`/Apprenant/UpdateApprenantpassword/${email}`, data);
