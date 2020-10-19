import axios from 'axios'

export const fetchWords = () =>  axios.get('http://localhost:3000/allowedWords').then(response => response.data)
