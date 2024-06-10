const express = require('express');
const hbs = require('hbs');
const path = require('path');
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
const app = express();
// const dbConnect = require("./config/dbConnect");
const ContactController = require("./Controllers/ContactController")
require("dotenv").config();
const port = process.env.PORT;
//  dbConnect();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Set up view engine
app.engine('hbs', exphbs.engine({
  defaultLayout: 'layout',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

// Set views directory
app.set('views', path.join(__dirname, 'views'));

// Register partials directory
hbs.registerPartials(path.join(__dirname, 'views/partials'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});
app.post('/contact', ContactController);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
