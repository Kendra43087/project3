const express = require('express');
const request = require('request');


const app = express();


const PORT = process.env.PORT || 3000;




app.get('/api/medical', (req,res)=>{
    
    request('https://www.dictionaryapi.com/api/references/medical/v2/xml/diabetes?key=17229857-b9f7-4519-bc57-e310ac43cb98', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        res.send(body);
    });
});





app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
});










