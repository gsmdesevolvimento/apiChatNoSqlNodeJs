import express from 'express';
import ctrl from './chat.ctrl';

const router = express.Router();

router
  .route('/chat')

  .get(ctrl.getAll)

  .post(ctrl.create);

export default router;
