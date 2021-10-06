import express from 'express';
import ctrl from './signin.ctrl';

const router = express.Router();

router
  .route('/signin')

  .post(ctrl.signin);

export default router;
