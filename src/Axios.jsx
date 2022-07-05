import axios from "axios";

let instance = axios.create({
    baseURL: 'https://62ad8a95402135c7acc26bf2.mockapi.io'
})

export default instance