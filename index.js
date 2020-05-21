const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const fs =require('fs');
const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
// app.set('view engine', 'ejs');
// app.set('views', 'views');

axios.get("https://www.americanexpress.com/in/").then(res=>{
    console.log(res.status);
    // console.log(res)
    fs.writeFileSync("D:/Projects/NodeJs/AxiosGetRequest/x.html",res.data);
})


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
});

app.listen(8000, () => {
    console.log('server running');
})
