const WebClient = require('javascript-web-client');
const apiWebClient = new WebClient ('http://127.0.0.1:8081/8');
const path = '';
const options = {

}
apiWebClient.request(path, options)
    .then(response =>{
        console.log(response);
    })