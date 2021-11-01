require('dotenv').config();
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const routes = require('./controllers');
const db = require('./models');

const PORT = process.env.PORT || 3000;
const oneDay = 1000 * 60 * 60 * 24;

const app = express();
db.sequelize.sync();
const sess = {
  secret: 'keyboard cat',
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false,
};
if (app.get('env') === 'production') {
  app.set('trust proxy', 1);
  sess.cookie.secure = true;
}
app.use(session(sess));

app.set('view engine', 'handlebars');
app.engine(
  'handlebars',
  handlebars({
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
  }),
);
app.set('views', `${__dirname}/views`);

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening to port ${PORT}`);
});
