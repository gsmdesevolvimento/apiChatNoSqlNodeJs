import SigninService from './signup.service';

export default {
  signup
};

function signup(req, res) {
  const { nickname, password } = req.body;
  SigninService.signup(nickname, password)
    .then(response => res.status(200).json(response))
    .catch(() => res.sendStatus(422));
}
