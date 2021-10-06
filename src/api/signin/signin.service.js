import Q from 'q';
import UsersModel from '../users/users.model';

export default {
  signin
};

function signin(nickname, password) {
  const deferred = Q.defer();

  UsersModel.find({
    nickname: { $gte: nickname },
    password: { $gte: password }
  }, (err, response) => {
    if (response.length > 0) {
      response[0].password = '';
      deferred.resolve(response[0]);
    } else {
      deferred.reject({});
    }
  }).limit(1);

  return deferred.promise;
}
