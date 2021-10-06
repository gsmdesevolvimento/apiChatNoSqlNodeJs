import express from 'express';
import ctrl from './signup.ctrl';

const router = express.Router();

router
  .route('/signup')

  .post(ctrl.signup);

export default router;
