import axios from "axios";

export default {
    getClinics: function () {
        return axios.get("https://transformation-api-v2.herokuapp.com/api/clinics");
    },
    getFashion: function () {
        return axios.get("https://transformation-api-v2.herokuapp.com/api/fashion");
    },
    getFitness: function () {
        return axios.get("https://transformation-api-v2.herokuapp.com/api/fitness");
    },
    getHistory: function () {
        return axios.get("https://transformation-api-v2.herokuapp.com/api/history");
    },
    getIdentity: function () {
        return axios.get("https://transformation-api-v2.herokuapp.com/api/identity");
    },
    getJobs: function () {
        return axios.get("https://transformation-api-v2.herokuapp.com/api/jobs");
    },
    getTravel: function () {
        return axios.get("https://transformation-api-v2.herokuapp.com/api/travel");
    },
    getNews: function () {
        return axios.get("https://transformation-api-v2.herokuapp.com/api/news");
    },
}