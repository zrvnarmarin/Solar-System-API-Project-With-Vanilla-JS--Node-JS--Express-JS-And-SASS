const express = require('express')
const axios = require('axios').default
const app = express()
const cors = require('cors')
require('dotenv').config()
const PORT = 8000


app.use(cors())

app.get('/', (req, res) => {


const options = {
  method: 'GET',
  url: 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list',
  headers: {
    'X-RapidAPI-Key': '0f15e93a0amshb56aac27f29d081p1e2f3djsn7230e50cf6d4',
    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
    res.json(response.data)
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
})

app.listen(PORT, () => {console.log('uspjelo je!')})