import SigninService from './signin.service';

export default {
  signin
};

function signin(req, res) {
  const { nickname, password } = req.body;
  SigninService.signin(nickname, password)
    .then(response => res.status(200).json(response))
    .catch(() => res.sendStatus(422));
}
