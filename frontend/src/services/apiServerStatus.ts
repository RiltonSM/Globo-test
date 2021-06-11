import axios from 'axios';

const apiServerStatus = axios.create({
    baseURL: "https://run.mocky.io/v3/"
});

export default apiServerStatus;