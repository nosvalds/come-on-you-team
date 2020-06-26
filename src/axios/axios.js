import axios from 'axios';

export default axios.create({
  baseURL: (process.env.NODE_ENV === 'production') ? 
    "https://come-on-you-team.herokuapp.com/api/matches" // production url
    : "http://192.168.10.13/api/matches/", // url from vagrant/homestead virtual machine for development
  headers: {
    Accept: "application/json",
  }
})