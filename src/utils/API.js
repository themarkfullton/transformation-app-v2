import axios from "axios";

export default {
    getClinics: function () {
        return axios.get("http://localhost:8080/api/clinics");
    },
    getFashion: function () {
        return axios.get("http://localhost:8080/api/fashion");
    },
    getFitness: function () {
        return axios.get("http://localhost:8080/api/fitness");
    },
    getHistory: function () {
        return axios.get("http://localhost:8080/api/history");
    },
    getIdentity: function () {
        return axios.get("http://localhost:8080/api/identity");
    },
    getJobs: function () {
        return axios.get("http://localhost:8080/api/jobs");
    },
    getTravel: function () {
        return axios.get("http://localhost:8080/api/travel");
    },
    getNews: function () {
        return axios.get("http://localhost:8080/api/news");
    },
}