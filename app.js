
const express = require('express')
const Account = require('./utils/Account.js');
const bodyParser = require('body-parser')
var session = require('express-session')
const app = express()
const port = 3000

const fs = require("fs");

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.set('trust proxy', 1)
app.use(session({
  secret: 'leafytea.host',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

const siteFiles = fs.readdirSync('./sites').filter(file => file.endsWith('.js'));
for (const file of siteFiles) {
  const site = require(`./sites/${file}`);
  console.log(`Registered route: ${site.name}`);
  if(site.type == 1) {
    app.get(site.name, (res,req) => {
      site.callback(res, req);
    });
  } else if(site.type == 2) {
    app.post(site.name, (res,req) => {
      site.callback(res, req);
    });
  }
}


app.listen(port, () => {
  console.log(`Nameless Shop Website listening on port ${port}`)
  
})