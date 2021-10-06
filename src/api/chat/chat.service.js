import Q from 'q';
import ChatModel from './chat.model';

export default {
  getAll,
  create
};

function getAll() {
  const deferred = Q.defer();

  ChatModel.find({}, (err, response) => {
    if (err) deferred.reject(err);
    deferred.resolve(response);
  });

  return deferred.promise;
}

function create(nickname, message) {
  const deferred = Q.defer();
  const chatService = new ChatModel({ nickname, message });
  chatService.save((err, response) => {
    if (err) deferred.reject(err);

    deferred.resolve(response);
  });

  return deferred.promise;
}
