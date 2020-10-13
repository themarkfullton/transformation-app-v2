import axios from "axios";

export default {
    getClinics: function () {
        return axios.get("localhost:8080/api/clinics");
    },
    getFashion: function () {
        return axios.get("localhost:8080/api/fashion");
    },
    getFitness: function () {
        return axios.get("localhost:8080/api/fitness");
    },
    getHistory: function () {
        return axios.get("localhost:8080/api/history");
    },
    getIdentity: function () {
        return axios.get("localhost:8080/api/identity");
    },
    getTravel: function () {
        return axios.get("localhost:8080/api/travel");
    },
    getNews: function () {
        return axios.get("localhost:8080/api/news");
    },
}