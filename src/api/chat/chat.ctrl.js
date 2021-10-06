import ChatService from './chat.service';

export default {
  getAll,
  create
};

function getAll(req, res) {
  ChatService.getAll()
    .then(chat => res.status(200).json(chat))
    .catch(() => res.sendStatus(422));
}

function create(req, res) {
  const { nickname, message } = req.body;

  ChatService.create(nickname, message)
    .then(chat => res.status(200).json(chat))
    .catch(() => res.sendStatus(422));
}
