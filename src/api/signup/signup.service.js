import Q from 'q';
import UsersModel from '../users/users.model';

export default {
  signup
};

function signup(nickname, password) {
  const deferred = Q.defer();

  UsersModel.find({ nickname: { $gte: nickname } }, (err, response) => {
    if (response.length > 0) {
      deferred.reject({});
    }
  });

  const usersSchema = new UsersModel({ nickname, password });
  usersSchema.save((err, response) => {
    if (err) deferred.reject(err);
    response.password = '';
    deferred.resolve(response);
  });

  return deferred.promise;
}
