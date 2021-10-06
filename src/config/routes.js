import chatRoute from '../api/chat';
import signinRoute from '../api/signin';
import signupRoute from '../api/signup';
import packageJson from '../../package.json';

const API_BASE = '/api';

export default app => {
  app.get(API_BASE, (req, res) => {
    res.json({ version: packageJson.version });
  });

  app.use(API_BASE, chatRoute);
  app.use(API_BASE, signinRoute);
  app.use(API_BASE, signupRoute);
};
