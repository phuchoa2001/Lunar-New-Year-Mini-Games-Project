const axios = require('axios');

axios.patch('https://lunar-new-year-mini-games-project-server.vercel.app/goals/updateStatus')
  .then(response => {
    console.log('Status Code:', response.status);
    console.log('Body:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });