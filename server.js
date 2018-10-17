const express = require('express');
const request = require('request');
const path = require('path');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const mongoose = require("mongoose");
const Blog = require("./models/Blog");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/momsintuition");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


const PORT = process.env.PORT || 3001

if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
app.use(express.static(path.join(__dirname, '../client/build')));
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});
}


app.post('/api/medical', (req,res)=>{
    let condition = req.body.name
    console.log(condition, " we are getting to api route");
    request('https://www.dictionaryapi.com/api/references/medical/v2/xml/'+ condition +'?key=17229857-b9f7-4519-bc57-e310ac43cb98', function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
       const $ = cheerio.load(body);
       var def = $('dt').text();
       
        res.json({data: def});




        
        // const server = new Mongod(27017);
        // server.open((err) => {
            // if (err === null) {
              // You may now connect a client to the MongoDB
              // server bound to port 27017.
            // }
        //   });
        //   const server = new Mongod({
            // port: 27017,
            // bin: '/opt/local/bin/mongod'
        //   });
          
        //   const server = new Mongod({
            // conf: '/path/to/mongodb.conf'
        //   });



    });
});

app.get("/api/blogs", (req, res) => {
    Blog.find(req.body)
        .then(dbBlog => res.json(dbBlog));
});

app.post("/api/blogs", (req, res) => {
    console.log("in Blogs route");
    console.log(req.body, " this is the blog body");
    Blog.create(req.body)
        .then(dbBlog => res.json(dbBlog));
});

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
});










