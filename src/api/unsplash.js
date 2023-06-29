import axios from "axios";
export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Nr0vTRndL3zK0sekgOwFO9GTJDDxR4fyZ7cp4z-el1w'
    }
 });
 

