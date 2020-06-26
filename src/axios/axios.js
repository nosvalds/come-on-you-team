import axios from 'axios';

export default axios.create({
  baseURL: (process.env.NODE_ENV === 'production') ? 
    "https://comeonyou.developme.space/api/" 
    : "http://192.168.10.13/api/matches/",
  headers: {
    Accept: "application/json",
  }
})