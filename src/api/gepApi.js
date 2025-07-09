import axios from "axios";

const geoApi = axios.create({
    baseURL : 'http://localhost:4000/api'
})

// https://litlink-backend.onrender.com/api http://localhost:5000/api

export default geoApi 
