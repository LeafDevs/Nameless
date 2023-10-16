
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

app.set('trust proxy', 1) // trust first proxy
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

// createRandomAccount();

// function createRandomAccount() {
//   for(let i = 0; i <= 50; i++) {
//     const email = randomString(12) + "@gmail.com";
//     const password = randomString(25);
//     Account.createAccount(email, password, false)
//     console.log(`Made new account: ${email}:${password}`)
//   }
// }

// function randomString(length) {
//   let string = "";
//   let letters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  
//   let counter = 0;
//   while(counter < length) {
//     counter += 1;
//     string += letters.charAt(Math.floor(Math.random() * letters.length));
//   }

//   return string;

// }


/**
 * 
 * @todo WEBSITE EDITION
 * 
 * Shop System (cart, and payment page) (cart done sorta)
 * Make Brady be the model
 * Create cool looking site page.
 * 
 * 
 * @todo IRL EDITION
 * Get shirt/pants printed for brady to model in
 * 
 * 
 */