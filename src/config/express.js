import bodyParser from 'body-parser';

const cors = require('cors');

export default app => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
};
