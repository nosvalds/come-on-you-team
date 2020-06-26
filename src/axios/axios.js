import axios from 'axios';

export default axios.create({
  baseURL: (process.env.NODE_ENV === 'production') ? 
    "https://cors-anywhere.herokuapp.com/https://come-on-you-team.herokuapp.com/api/matches" // production url
    : "https://cors-anywhere.herokuapp.com/https://come-on-you-team.herokuapp.com/api/matches", // url from vagrant/homestead virtual machine for development
  headers: {
    Accept: "application/json",
  }
})