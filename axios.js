const axios = require("axios");
axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/todos/1',

})
    .then(function (response) {
        console.log(response);
    });
