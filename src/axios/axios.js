import axios from 'axios';

export default axios.create({
  baseURL: (process.env.NODE_ENV === 'production') ? 
    "https://niks-cors-anywhere.herokuapp.com/https://come-on-you-team.herokuapp.com/api/matches" // production url
    : "http://homestead.test/api/matches", // url from vagrant/homestead virtual machine for development
  headers: {
    Accept: "application/json",
  }
})