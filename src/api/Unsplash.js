import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        'Authorization': 
        'Client-ID 93f3792c92a3ca159b7385071b936f68399d691db69bdfb566f37b33671d1d09'
    }
})