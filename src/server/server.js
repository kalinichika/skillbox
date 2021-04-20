import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import axios from 'axios';
import { indexTemplate } from './indexTemplate';
import compression from 'compression';
import helmet from 'helmet';

const PORT = process.env.PORT || 3000;
const IS_PROD = process.env.NODE_ENV === 'production';

const app = express();

app.use('/static', express.static('./dist/client'));
if (IS_PROD) {
  app.use(compression());
  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
}

app.get('/auth', (req, res) => {
  axios
    .post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${process.env.PATH_TO_HOME_URL}/auth`,
      {
        auth: {
          username: process.env.CLIENT_ID,
          password: process.env.SECRET,
        },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      }
    )
    .then(({ data }) => {
      res.send(
        indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
      );
    })
    .catch((e) => console.log("ERROR IN app.get('/auth')", e));
});

app.get('*', (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(PORT, () => {
  console.log('Server started on http://localhost:' + PORT);
});
