import axios from "axios";

const apiCall = axios.create({
    baseURL:"https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3",
    withCredentials : false,
    headers: {
        'Accepts' : 'application/json',
        'Content-Type' : 'application/json'
    }
});

export default {
     getEvents(){
        return apiCall.get('/events');
    },
    getEvent(id){
        return apiCall.get('/events/'+ id);
    }
}