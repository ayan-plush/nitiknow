import axios from "axios";

const geoApi = axios.create({
    baseURL : 'https://nitiknowbackend.onrender.com/api'
})

// https://litlink-backend.onrender.com/api http://localhost:4000/api

export default geoApi 
