const axios = require('axios');
const fs = require('fs');

axios.get('https://lunar-new-year-mini-games-project-server.vercel.app/checkActions')
  .then(response => {
    console.log('Status Code:', response.status);
    console.log('Body:', response.data);
    fs.writeFile('api_response.txt', JSON.stringify(response.data), (err) => {
      if (err) throw err;
      console.log('api_response.txt has been saved with the response data.');
    });
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });
